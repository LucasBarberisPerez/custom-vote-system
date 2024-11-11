import { IDatabase } from "../interface/database.interface";
import BetterSqlite3 from "better-sqlite3";
import path from "path";
import { existsSync, readFileSync, writeFileSync } from "fs";

export class SqliteDatabase implements IDatabase {
  private DATABASE_FILE_PATH = path.join(process.cwd(), "/src/database/vote-system.db");
  private static db: BetterSqlite3.Database | null = null;

  constructor() {
    this.createDatabaseFile();
    this.connect();
  }
  async execute(query: string, params?: any[]): Promise<void> {
    const sql = query;
    try {
      this.checkConnection();
      if (!params) {
        SqliteDatabase.db!.exec(sql);
        console.log(`Executed successfully`);
        return;
      }
      const prepare = SqliteDatabase.db!.prepare(sql);
      const result = prepare.run(params);
      if (result.changes > 0) {
        console.log(`Executed successfully, rows affected: ${result.changes}`);
      } else {
        throw new Error("No rows affected");
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error("Error executing query" + ", " + error.message);
      }
    }
  }
  async query<T>(query: string, params?: any[]): Promise<T[]> {
    this.checkConnection();
    const sql = query;
    try {
      this.connect();
      if (params) {
        return SqliteDatabase.db!.prepare(sql).all(params) as T[];
      }
      return SqliteDatabase.db!.prepare(sql).all() as T[];
    } catch (error) {
      if (error instanceof Error) {
        throw new Error("Error executing query" + ", " + error.message);
      }
      return [];
    }
  }
  async findOne<T>(query: string, params?: any[]): Promise<T | null> {
    this.checkConnection();
    const sql = query;
    try {
      if (params) {
        return SqliteDatabase.db!.prepare(sql).get(params) as T;
      }
      return SqliteDatabase.db!.prepare(sql).get() as T;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error("Error executing find one query" + ", " + error.message);
      }
      return null;
    }
  }
  connect(): void {
    try {
      if (SqliteDatabase.db === null || SqliteDatabase.db === undefined) {
        SqliteDatabase.db = new BetterSqlite3(this.DATABASE_FILE_PATH);
        console.log("Database connected successfully.");
      }
    } catch (error) {
      console.error("Error connecting to database:", error);
      throw new Error("Error connecting to database" + ", " + error);
    }
  }

  close(): void {
    try {
      if (SqliteDatabase.db) {
        SqliteDatabase.db.close();
        SqliteDatabase.db = null;
      }
    } catch (error) {
      throw new Error("Error closing database" + ", " + error);
    }
  }

  private createDatabaseFile(): void {
    try {
      if (!existsSync(this.DATABASE_FILE_PATH)) {
        writeFileSync(this.DATABASE_FILE_PATH, "");
        this.connect();
        const sql = readFileSync(
          path.join(process.cwd(), "src", "database", "sql", "init.sql"),
          "utf-8"
        );
        SqliteDatabase.db!.exec(sql);
        this.close();
        console.log("Database file created successfully.");
      }
    } catch (error) {
    } finally {
      this.close();
    }
  }

  private checkConnection(): void {
    if (!SqliteDatabase.db) {
      throw new Error("Database not connected");
    }
  }
}

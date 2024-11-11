export interface IDatabase {
  execute(query: string, params?: any[]): Promise<void>;
  query<T>(query: string, params?: any[]): Promise<T[]>;
  findOne<T>(query: string, params?: any[]): Promise<T | null>;
  connect(): void;
  close(): void;
}

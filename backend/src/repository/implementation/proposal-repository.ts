import { Proposal, ProposalDTO } from "../../model/proposal.model";
import { IProposalRepository } from "../interface/proposal-repository.interface";
import { IDatabase } from "../../database/interface/database.interface";

export class ProposalRepository implements IProposalRepository {
  constructor(private readonly database: IDatabase) {}
  async getLatest(): Promise<Array<ProposalDTO>> {
    const sql = "SELECT * FROM proposal ORDER BY REGISTER_DATE DESC LIMIT 6;";
    try {
      const latestProposals = await this.database.query<ProposalDTO>(sql);
      return latestProposals;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error("Error: trying to get latest proposals, " + error.message);
      }
      return [];
    }
  }
  async updateTotalVotesById(id: number, favorVotes: number, againstVotes: number): Promise<void> {
    const sql = "UPDATE PROPOSAL SET FAVOR=?, AGAINST=?, TOTAL_VOTES=? WHERE ID=?;";
    try {
      const totalVotes = favorVotes + againstVotes;
      await this.database.execute(sql, [id, favorVotes, againstVotes, totalVotes]);
    } catch (error) {
      console.error("Failed to update the votes:", error);
    }
  }

  async getAll(): Promise<ProposalDTO[]> {
    const sql = "SELECT * FROM proposal ORDER BY REGISTER_DATE;";
    try {
      const proposals = await this.database.query<ProposalDTO>(sql);
      return proposals;
    } catch (error) {
      console.error("Error trying to get all proposals:", error);
      return [];
    }
  }
  async create(proposal: Proposal): Promise<void> {
    const sql = "INSERT INTO PROPOSAL (TITLE, PROP_DESC, REGISTER_DATE) VALUES(?, ?, ?);";
    try {
      await this.database.execute(sql, [proposal.title, proposal.desc, proposal.voteDate]);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error inserting new proposal:", error.message);
      }
    }
  }
}

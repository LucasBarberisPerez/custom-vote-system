import { Vote } from "../../model/vote.model";
import { IVoteRepository } from "../interface/vote-repository.interface";
import { IDatabase } from "../../database/interface/database.interface";
export class VoteSqliteRepository implements IVoteRepository {
  constructor(private readonly database: IDatabase) {}

 async create({ username, proposalId, voteType, voteDate }: Vote): Promise<void> {
    const sql = "INSERT INTO VOTE (USERNAME, PROPOSAL_ID, VOTE_TYPE, VOTE_DATE) VALUES(?, ?, ?, ?)";
    try {
      this.database.execute(sql, [username, proposalId, voteType, voteDate.toISOString()]);
    } catch (error) {
      console.error("Error trying process the vote.", error);
    }
  }
}

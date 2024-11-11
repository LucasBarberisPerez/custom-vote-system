import { Proposal, ProposalDTO } from "../../model/proposal.model";

export interface IProposalRepository {
  getLatest(): Promise<Array<ProposalDTO>>;
  getAll(): Promise<Array<ProposalDTO>>;
  updateTotalVotesById(id: number, favorVotes: number, againstVotes: number): Promise<void>;
  create(proposal: Proposal): Promise<void>;
}

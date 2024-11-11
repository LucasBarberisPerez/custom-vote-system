import { Proposal, ProposalDTO } from "../../model/proposal.model";
import { IProposalRepository } from "../../repository/interface/proposal-repository.interface";
import { IProposalService } from "../interface/proposal-service.interface";
//TODO: implement error handling for route.
export class ProposalService implements IProposalService {
  private readonly proposalRepository: IProposalRepository;
  constructor(proposalRepository: IProposalRepository) {
    this.proposalRepository = proposalRepository;
  }
  async getLatest(): Promise<Proposal[]> {
    try {
      const proposals: ProposalDTO[] = await this.proposalRepository.getLatest();
      const proposalList: Proposal[] = [];
      for (const row of proposals) {
        const Proposal: Proposal = {
          id: row.ID,
          title: row.TITLE,
          desc: row.PROP_DESC,
          voteDate: row.REGISTER_DATE,
          votesAgainst: row.AGAINST,
          votesInFavor: row.FAVOR,
        };
        proposalList.push(Proposal);
      }
      return proposalList;
    } catch (error) {
      console.log("error trying to get latest proposals:", error);
      return [];
    }
  }

  async getAll(): Promise<Proposal[]> {
    try {
      const proposals = await this.proposalRepository.getAll();
      const proposalList: Array<Proposal> = [];
      for (const row of proposals) {
        const Proposal: Proposal = {
          id: row.ID,
          title: row.TITLE,
          desc: row.PROP_DESC,
          voteDate: row.REGISTER_DATE,
          votesAgainst: row.AGAINST,
          votesInFavor: row.FAVOR,
        };
        proposalList.push(Proposal);
      }
      return proposalList;
    } catch (error) {
      console.log("error trying to get all proposals:", error);
      return [];
    }
  }

  async create(proposal: Proposal): Promise<void> {
    
    try {
      if (!proposal) {
        throw new Error("Not proposal detected...");
      }
      proposal.voteDate = new Date(proposal.voteDate).toISOString().split("T")[0];
      await this.proposalRepository.create(proposal);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  }
}

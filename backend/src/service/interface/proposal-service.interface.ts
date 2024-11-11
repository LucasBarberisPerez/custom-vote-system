import { Proposal } from "../../model/proposal.model";

export interface IProposalService {
    getLatest(): Promise<Proposal[]>;
    getAll(): Promise<Proposal[]>;
    create(proposal: Proposal): Promise<void>;
}
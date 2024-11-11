export interface Proposal {
  id: number;
  title: string;
  desc: string;
  voteDate: string;
  votesInFavor: number;
  votesAgainst: number;
}
export interface ProposalDTO {
  ID: number;
  TITLE: string;
  PROP_DESC: string;
  REGISTER_DATE: string;
  FAVOR: number;
  AGAINST: number;
}

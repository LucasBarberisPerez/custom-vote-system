export interface Vote {
  username: string;
  proposalId: number;
  voteType: "favor" | "against";
  voteDate: Date;
}

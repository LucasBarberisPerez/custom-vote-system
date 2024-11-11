import { Vote } from "../../model/vote.model";

export interface IVoteRepository {
    create(vote: Vote):Promise<void>; 
}
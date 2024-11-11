import { NextFunction, Request, Response } from "express";
import { IProposalController } from "../interface/proposal-controller.interface";
import { IProposalService } from "../../service/interface/proposal-service.interface";
import { Proposal } from "../../model/proposal.model";

export class ProposalController implements IProposalController {
  constructor(private readonly proposalService: IProposalService) {}
  async getLatest(req: Request, res: Response) {
    try {
      const proposals = await this.proposalService.getLatest();
      res.status(200).json(proposals);
    } catch (error) {
      res.status(500).json("Error trying to get latest proposals");
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const proposals = await this.proposalService.getAll();
      res.status(200).json(proposals);
    } catch (error) {
      res.status(500).json("Error trying to get all proposals");
    }
  }

  async create(req: Request, res: Response) {
    try {
      const proposal: any = req.body;
      await this.proposalService.create(proposal);
      res.status(200).json(proposal);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message, name: error.name });
      }
    }
  }
}

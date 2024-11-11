import { Router } from "express";
import multer from "multer";
import { SqliteDatabase } from "../database/implementation/sqlite-database";
import { ProposalRepository } from "../repository/implementation/proposal-repository";
import { ProposalController } from "../controller/implementation/proposal-controller";
import { ProposalService } from "../service/implementation/proposal-service";

const proposalRouter = Router();
const db = new SqliteDatabase();
const proposalRepository = new ProposalRepository(db);
const proposalService = new ProposalService(proposalRepository);
const proposalController = new ProposalController(proposalService);

proposalRouter.get("/latest", (req, res) => proposalController.getLatest(req, res));
proposalRouter.get("/all", (req, res) => proposalController.getAll(req, res));
proposalRouter.post("/create", multer().none(), (req, res) => proposalController.create(req, res));

export default proposalRouter;

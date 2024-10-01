import { Router } from "express";
import * as PLayerController from "./controllers/players-controller";

const router = Router();

router.get("/players", PLayerController.getPlayer);
router.get("/players/:id", PLayerController.getPlayerById);

export default router;

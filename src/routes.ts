import { Router } from "express";
import * as PLayerController from "./controllers/players-controller";

const router = Router();

router.get("/players", PLayerController.getPlayer);
router.get("/players/:id", PLayerController.getPlayerById);
router.delete("/players/:id", PLayerController.deletePlayer)

router.post("/players", PLayerController.postPlayer);

export default router;

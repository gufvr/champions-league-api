import { Router } from "express";
import * as PLayerController from "./controllers/players-controller";
import * as ClubsController from "./controllers/clubs-controller";

const router = Router();

router.get("/players", PLayerController.getPlayer);
router.get("/players/:id", PLayerController.getPlayerById);
router.delete("/players/:id", PLayerController.deletePlayer);
router.patch("/players/:id", PLayerController.updatePlayer);

router.get("/clubs", ClubsController.getClubs);

router.post("/players", PLayerController.postPlayer);

export default router;

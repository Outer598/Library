import { Router } from "express";
import { latest, popular } from "../controllers/latestController.js";


const router = Router();

router.get('/latest', latest);
router.get('/popular', popular);

export default router;

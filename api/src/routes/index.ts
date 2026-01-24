import { Hono } from "hono";
import healthRouter from "./health.route";
import deployRouter from "./deployer.controller";

const router = new Hono();

router.route("/health", healthRouter);
router.route("/deploy", deployRouter);

export default router;

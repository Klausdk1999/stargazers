import { Router } from "express";
import validateSchema from "../middlewares/schemaValidation.js";
import { battleSchema } from "../schemas/Schemas.js";
import { battleService } from "../services/Services.js";
//import {Schema} from "../schemas/Schema.js";

const router = Router();

router.post("/battle",validateSchema(battleSchema),battleService);
//atendimentoRouter.post("/atendimento", validateSchema(cakeSchema), postCake);

export default router;
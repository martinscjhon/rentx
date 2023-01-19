import { Router } from "express";
import { categoryRouters } from "./categories.routes";
import { specificationRouters } from "./specifications.routes";

const allRouters = Router()

allRouters.use("/categories", categoryRouters)
allRouters.use("/specifications", specificationRouters)

export { allRouters }
import { Request, Response, Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationRouters = Router();

specificationRouters.post('/', (req, res) => {
    return createSpecificationController.handle(req, res)
})

specificationRouters.get('/', (req, res) => {
    return listSpecificationsController.handle(req, res)
})

export { specificationRouters }
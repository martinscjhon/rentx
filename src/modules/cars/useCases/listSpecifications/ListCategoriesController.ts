import { Request, Response } from "express";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListSpecificationsUseCase } from "./ListCategoriesUseCase";

class ListSpecificationsController {
    constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) { }

    handle(req: Request, res: Response) {
        const allSpecifications = this.listSpecificationsUseCase.execute();

        return res.status(200).json(allSpecifications)
    }
}

export { ListSpecificationsController }
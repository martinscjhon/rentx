import { Request, Response } from "express";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    constructor(private listCategoryUseCase: ListCategoriesUseCase) { }

    handle(req: Request, res: Response) {
        const allCategories = this.listCategoryUseCase.execute();

        return res.status(200).json(allCategories)
    }
}

export { ListCategoriesController }
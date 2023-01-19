import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {
    }
    handle(req: Request, res: Response): Response {
        // console.log(req.body)
        const { name, description } = req.body;

        console.log(name)
        console.log(description)

        // console.log(name, "aui", description, "aq")

        this.createCategoryUseCase.execute({ name, description });

        return res.status(201).send();
    }
}

export { CreateCategoryController }
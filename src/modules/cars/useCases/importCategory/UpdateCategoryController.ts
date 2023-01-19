import { Request, Response } from "express";
import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

class UpadateCategoryController {
    constructor(private importUpdadeFileUseCase: UpdateCategoryUseCase) { }

    handle(req: Request, res: Response): Response {
        const { file } = req;

        console.log(file, "aqui file")

        this.importUpdadeFileUseCase.execute(file)

        return res.send();

    }
}

export { UpadateCategoryController }
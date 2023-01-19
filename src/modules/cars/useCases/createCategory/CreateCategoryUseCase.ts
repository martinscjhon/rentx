import { messageError } from "../../../../messages/error"
import { iCategoriesRepository } from "../../repositories/interfaces/iCategoriesRepository"

interface IRequest {
    name: string,
    description: string
}

class CreateCategoryUseCase {
    constructor(private categoryRepository: iCategoriesRepository) { }

    execute({ name, description }: IRequest): void {

        const categoryAlreadyExist = this.categoryRepository.findByName(name)

        if (categoryAlreadyExist) {
            throw new Error(messageError.categoryError)
        }

        this.categoryRepository.create({ name, description })
    }
}

export { CreateCategoryUseCase }

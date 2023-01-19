import { messageError } from "../../../../messages/error";
import { iSpeficificationsRepository } from "../../repositories/interfaces/iSpeficificationsRepository";

interface IRequest {
    name: string,
    description: string
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: iSpeficificationsRepository) { }

    execute({ name, description }: IRequest): void {
        const speficationAlreadyExist = this.specificationsRepository.findByName(name)

        if (speficationAlreadyExist) {
            throw new Error(messageError.specificationError)
        }

        this.specificationsRepository.create({ name, description })
    }
}

export { CreateSpecificationUseCase }

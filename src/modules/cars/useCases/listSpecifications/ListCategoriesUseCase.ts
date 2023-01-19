import { SpecificationModel } from "../../model/SpecificationModel";
import { iSpeficificationsRepository } from "../../repositories/interfaces/iSpeficificationsRepository";

class ListSpecificationsUseCase {
    constructor(private specificationsRepository: iSpeficificationsRepository) { }

    execute(): SpecificationModel[] {
        const listCategories = this.specificationsRepository.listSpecifications()

        return listCategories;
    }
}

export { ListSpecificationsUseCase }
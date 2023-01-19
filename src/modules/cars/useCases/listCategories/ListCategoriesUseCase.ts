import { CategoryModel } from "../../model/CategoryModel";
import { iCategoriesRepository } from "../../repositories/interfaces/iCategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categoryRepository: iCategoriesRepository) { }

    execute(): CategoryModel[] {
        const listCategories = this.categoryRepository.listCategories();

        return listCategories;
    }
}

export { ListCategoriesUseCase }
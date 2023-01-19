import { CategoryModel } from "../../model/CategoryModel";

//DTO = data transfer object
interface ICreateCategoryDTO {
    name: string,
    description: string
}

interface iCategoriesRepository {
    findByName(name: string): CategoryModel;
    listCategories(): CategoryModel[];
    create({ name, description }: ICreateCategoryDTO): void;    
}

export { iCategoriesRepository, ICreateCategoryDTO }
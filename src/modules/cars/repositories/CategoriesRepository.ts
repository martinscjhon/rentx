import { CategoryModel } from "../model/CategoryModel"
import { ICreateCategoryDTO, iCategoriesRepository } from "./interfaces/iCategoriesRepository";

class CategoriesRepository implements iCategoriesRepository {
    private categories: CategoryModel[];

    private static INSTANCE: CategoriesRepository;

    constructor() {
        this.categories = []
    }

    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository()
        }

        return CategoriesRepository.INSTANCE
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new CategoryModel()

        Object.assign(category, {
            name,
            description,
            created_At: new Date()
        })

        this.categories.push(category)
    }

    listCategories(): CategoryModel[] {
        return this.categories;
    }

    findByName(name: string): CategoryModel {
        const existByNameCategory = this.categories.find(category => category.name === name);

        return existByNameCategory
    }

}

export { CategoriesRepository }
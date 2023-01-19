import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { UpadateCategoryController } from "./UpdateCategoryController";
import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

const updateCategoryRepository = CategoriesRepository.getInstance()
const upadateCategoryUseCase = new UpdateCategoryUseCase(updateCategoryRepository)
const upadateCategoryController = new UpadateCategoryController(upadateCategoryUseCase)

export { upadateCategoryController }
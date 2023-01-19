import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";
import { ListSpecificationsController } from "./ListCategoriesController";
import { ListSpecificationsUseCase } from "./ListCategoriesUseCase";

const listSpecificationsRepository = SpecificationsRepository.getInstance();

const listSpecificationsUseCase = new ListSpecificationsUseCase(listSpecificationsRepository);

const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase);

export { listSpecificationsController }
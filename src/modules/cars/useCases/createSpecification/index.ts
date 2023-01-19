import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationsUseCase";

const createSpecificationRepository = SpecificationsRepository.getInstance();

const createSpecificationsUseCase = new CreateSpecificationUseCase(createSpecificationRepository);

const createSpecificationController = new CreateSpecificationController(createSpecificationsUseCase);

export { createSpecificationController }
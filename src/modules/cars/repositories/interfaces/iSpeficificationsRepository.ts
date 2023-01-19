import { CategoryModel } from "../../model/CategoryModel";
import { SpecificationModel } from "../../model/SpecificationModel";

//DTO = data transfer object
interface ICreateSpeficificationDTO {
    name: string,
    description: string
}

interface iSpeficificationsRepository {
    create({ name, description }: ICreateSpeficificationDTO): void;
    findByName(name: string): SpecificationModel;
    listSpecifications(): SpecificationModel[];
}

export { iSpeficificationsRepository, ICreateSpeficificationDTO }
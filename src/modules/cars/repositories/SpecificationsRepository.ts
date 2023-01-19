import { SpecificationModel } from "../model/SpecificationModel";
import { ICreateSpeficificationDTO, iSpeficificationsRepository } from "./interfaces/iSpeficificationsRepository";

class SpecificationsRepository implements iSpeficificationsRepository {
    private specifications: SpecificationModel[]

    private static INSTANCE: SpecificationsRepository;

    constructor() {
        this.specifications = []
    }

    public static getInstance(): SpecificationsRepository {
        if (!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }

        return SpecificationsRepository.INSTANCE
    }

    create({ name, description }: ICreateSpeficificationDTO): void {
        const spefication = new SpecificationModel()

        Object.assign(spefication, {
            name,
            description,
            created_At: new Date()
        })

        this.specifications.push(spefication)
    }

    listSpecifications(): SpecificationModel[] {
        return this.specifications;
    }

    findByName(name: string): SpecificationModel {
        const existByNameSpecification = this.specifications.find(specification => specification.name === name);

        return existByNameSpecification
    }

}

export { SpecificationsRepository }
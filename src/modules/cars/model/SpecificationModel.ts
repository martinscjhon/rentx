import { v4 as uuid } from 'uuid';

class SpecificationModel {
    id?: string;
    name: string;
    description: string;
    created_At: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { SpecificationModel }
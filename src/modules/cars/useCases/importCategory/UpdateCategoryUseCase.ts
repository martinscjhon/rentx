import fs from "fs"
import { parse } from 'csv-parse';
import { iCategoriesRepository } from "../../repositories/interfaces/iCategoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}

class UpdateCategoryUseCase {
    constructor(private importUpdadeFileUseCase: iCategoriesRepository) { }

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = []

            // permite leitura do arquivo em partes
            const parserFile = parse({
                delimiter: ','
            });

            // redireciona parte do arquivo lido para algum lugar
            stream.pipe(parserFile);

            parserFile.on("data", async (line) => {
                const [name, description] = line;
                categories.push({
                    name, description
                })
            })
                .on("end", () => {
                    fs.promises.unlink(file.path)
                    resolve(categories)
                })
                .on("error", (err) => {
                    reject(err)
                })
        })
    }


    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file)

        categories.map(async (category) => {
            const { name, description } = category;

            const existCategory = this.importUpdadeFileUseCase.findByName(name);

            if (!existCategory) {
                this.importUpdadeFileUseCase.create({
                    name, description
                })
            }

        })
    }


}

export { UpdateCategoryUseCase }
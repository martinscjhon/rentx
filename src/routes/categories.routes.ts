import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import multer from "multer";
import { upadateCategoryController } from "../modules/cars/useCases/importCategory";

const upload = multer({
    dest: "./tmp"
});

const categoryRouters = Router();

categoryRouters.post('/', (req, res) => {
    return createCategoryController.handle(req, res);
})

categoryRouters.get('/', (req, res) => {
    return listCategoriesController.handle(req, res)
})

categoryRouters.post('/upload', upload.single("file"), (req, res) => {
    return upadateCategoryController.handle(req, res)
})

export { categoryRouters }  
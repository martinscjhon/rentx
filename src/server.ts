import express from 'express';
import { allRouters } from './routes';
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'
import "./database"

const app = express();
app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(allRouters)

app.listen(3333, () => {
  console.log('Server is running!');
});

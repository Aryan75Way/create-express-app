import express, { type Express, type Request, type Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import http from "http";
import cors from "cors";
import { loadConfig } from "./app/common/helper/config.helper";
import errorHandler from "./app/common/middleware/error-handler.middleware";
import routes from './app/route';
import { initDB } from "./app/common/services/database.service";
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from './swagger.json'

loadConfig();

const port = process.env.PORT || 3000;
const app: Express = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({
  origin: '*',
}))

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

/**
 * Initializes the application.
 *
 * Initializes the database connection, adds routes, adds error handler, and
 * starts the HTTP server.
*/
const initApp = async () => {
  // await initDB();

  app.use("/api", routes);

  app.use(errorHandler);

  app.get("/", (req: Request, res: Response) => {
    res.send({ status: "ok" });
  });

  const httpServer = http.createServer(app)

  httpServer.listen(port, () => {
      console.log(`Server is running on port ${port}`)
  })
};

void initApp();
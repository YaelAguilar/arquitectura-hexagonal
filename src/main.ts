import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import bodyParser from "body-parser";
import express from "express";

import { config } from "./config";
import { fruitRouter } from "./Fruit/infrastructure/routes/fruitRoutes";
import { healthRouter } from "./health/health-router";
import { userRouter } from "./User/infrastructure/routes/userRouter";

function boostrap() {
  const app = express();

  app.use(bodyParser.json());
  app.use("/health", healthRouter);
  app.use("/users", userRouter);
  app.use("/fruits", fruitRouter);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();

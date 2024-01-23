// Packages
import "reflect-metadata";
import * as Express from "express";
import { json as JSONBodyParser, urlencoded as UrlEncoded } from "body-parser";
import * as Cors from "cors";
import * as Colors from "colors";
import { createServer } from "http";
import * as path from "path";

// Utility
import config from "./config";
import { dataSource } from "./config/app-data-source";

// Error Handlers
import { errorHandler } from "./middleware/error-handler";

// Routers
import { MovieRouter } from "./routes/movie.router";
import { InfoRouter } from "./routes/info.router";

void dataSource
  .initialize()
  .then(() => {
    console.log(Colors.cyan("Data Source has been initialized!"));
  })
  .catch((err) => {
    console.error(
      Colors.red(`Error during Data Source initialization: ${err}`),
    );
  });

const app = Express();

app.use(Cors());
app.use(JSONBodyParser({ limit: "10mb" }));
app.use(UrlEncoded({ extended: false }));
app.use(Express.static(path.join(__dirname, "../public")));

app.use(InfoRouter);
app.use("/movies", MovieRouter);

app.use(errorHandler);

const httpServer = createServer(app);

// Run Server
httpServer.listen(config.port, () =>
  console.log(Colors.cyan(`Server listening on port ${config.port}`)),
);

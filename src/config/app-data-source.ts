import { DataSource } from "typeorm";
export const dataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD || "",
  entities: ["dist/models/**/*.js"],
  subscribers: ["dist/subscriber/**/*.js"],
  migrations: ["dist/migrations/**/*.js"],
  logging: process.env.NODE_ENV === "development" ? true : ["error"],
  synchronize: false,
  bigNumberStrings: false,
});

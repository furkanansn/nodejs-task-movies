/**
 * MAIN APP CONFIG
 */
import * as DotEnvFlow from "dotenv-flow";

const envFound = DotEnvFlow.config();
if (!envFound) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const frontEndURL = process.env.FRONT_END_URL || "http://localhost:3000";
const backEndURL = process.env.BACK_END_URL || "http://localhost:5001";
export default {
  environment: process.env.NODE_ENV,
  frontEndURL,
  backEndURL,
  // App Port
  port: process.env.PORT || 5001,
};

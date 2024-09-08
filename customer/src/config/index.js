const dotEnv = require("dotenv");

if (process.env !== "prod") {
  dotEnv.config({ path: ".env" });
} else {
  dotEnv.config();
}

module.exports = {
  PORT: process.env.PORT,
  APP_SECRET: process.env.APP_SECRET,
  EXCHANGE_NAME: process.env.EXCHANGE_NAME,
  MSG_QUEUE_URL: process.env.MSG_QUEUE_URL,
  CUSTOMER_SERVICE: "customer_service",
  SHOPPING_SERVICE: "shopping_service",
  QUEUE_NAME: "CUSTOMER_QUEUE"
};

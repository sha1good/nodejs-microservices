const mongoose = require("mongoose");
const dotEnv = require("dotenv");

dotEnv.config();

module.exports = async () => {
    console.log("This is called ")
    console.log(process.env.MONGODB_URI)
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Db Connected");
  } catch (error) {
    console.error("Error ============ ON DB Connection");
    console.log(error);
  }
};

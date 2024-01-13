const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const url =
  process.env.MONGO_URI ||
  `mongodb+srv://chatapp:chatapp@chatcluster.k0jdjwe.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url);
    console.log(`MongoDB Connected: ${conn.connection.host} `);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();

import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
let connection;

const startDbConnection = async () => {
  if (!connection) {
    connection = await mongoose.connect(uri);
    console.log("----------Connect to Database-------------");
  }
  return connection;
};

export default startDbConnection;

import mongoose from "mongoose";

type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};

async function dbConnection(): Promise<void> {
  if (connection.isConnected) {
    console.log(" already connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URL || "");
    connection.isConnected = db.connections[0].readyState;
    console.log("db connected successfully ");
  } catch (error) {
    console.log("Database failed to connect ", error);

    process.exit(1);
  }
}

export default dbConnection;

import mongoose from "mongoose";

let cached = mongoose || { conn: null, promise: null };

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

export const connectToDatabase = async () => {

    console.log("Uri " , process.env.MONGODB_URI)

  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  

  return cached.conn;
};

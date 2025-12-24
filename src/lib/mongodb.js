import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  // Clearer error early: helps diagnose missing env in dev instead of throwing
  // an unhelpful connection error later that renders as an HTML error page.
  throw new Error("Missing MONGODB_URI environment variable. Set MONGODB_URI in your .env.local or environment.");
}

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;

import clientPromise from "@/lib/mongodb.js";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const client = await clientPromise;
  const db = client.db("carexyz");

  const exists = await db.collection("users").findOne({ email: body.email });

  if (exists) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  await db.collection("users").insertOne({
    name: body.name,
    email: body.email,
    password: hashedPassword,
    nid: body.nid,
    contact: body.contact,
    createdAt: new Date(),
  });

  return NextResponse.json({ success: true });
}

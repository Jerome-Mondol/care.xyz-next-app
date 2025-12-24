import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb.js';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export async function GET(req) {
  // use getToken to read JWT from cookies/headers
  const token = await getToken({ req, secret });

  if (!secret) {
    return NextResponse.json({ error: 'Server MIsconfiguration: NEXTAUTH_SECRET not set' }, { status: 500 });
  }

  if (!token) {
    const cookies = req.headers.get('cookie') || null;
    return NextResponse.json({ error: 'Unauthorized', debug: { hasSecret: !!secret, cookies } }, { status: 401 });
  }

  const client = await clientPromise;
  const db = client.db('carexyz');

  const userEmail = token?.email;
  const bookings = await db
    .collection('bookings')
    .find({ 'user.email': userEmail })
    .sort({ createdAt: -1 })
    .toArray();

  return NextResponse.json({ bookings });
}

export async function POST(req) {
  const token = await getToken({ req, secret });

  if (!secret) {
    return NextResponse.json({ error: 'Server misconfiguration: NEXTAUTH_SECRET not set' }, { status: 500 });
  }

  if (!token) {
    const cookies = req.headers.get('cookie')  || null;
    return NextResponse.json({ error: 'Unauthorized', debug: { hasSecret: !!secret, cookies } }, { status: 401 });
  }

  const body = await req.json();
  const client = await clientPromise;
  const db = client.db('carexyz');

  const booking = {
    ...body,
    user: { name: token?.name || token?.email, email: token?.email, id: token?.sub },
    status: body.status || 'Pending',
    createdAt: new Date(),
  };

  const result = await db.collection('bookings').insertOne(booking);

  return NextResponse.json({ success: true, id: result.insertedId });
}

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
// use explicit .js import to match project files
import clientPromise from "@/lib/mongodb.js";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("CREDENTIALS RECEIVED:", credentials);

        if (!credentials?.email || !credentials?.password) return null;

        const client = await clientPromise;
        // use the same DB name as register API
        const db = client.db("carexyz");

        const user = await db.collection("users").findOne({ email: credentials.email });

        console.log("USER FROM DB:", !!user);

        if (!user) {
          console.log("❌ USER NOT FOUND");
          return null;
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);
        console.log("PASSWORD MATCH:", isValid);

        if (!isValid) {
          console.log("❌ PASSWORD INVALID");
          return null;
        }

        console.log("✅ LOGIN SUCCESS");

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

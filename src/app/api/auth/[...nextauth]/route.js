import { authOptions } from "@/utils/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


// import { authOptions } from "@/utils/auth";
// import NextAuth from "next-auth";
// import connectDB from "@/lib/db"; // Import MongoDB connection function

// export async function GET(req) {
//   await connectDB(); // Ensure database connection before authentication
//   return NextAuth(authOptions)(req);
// }

// export async function POST(req) {
//   await connectDB(); // Ensure database connection before authentication
//   return NextAuth(authOptions)(req);
// }


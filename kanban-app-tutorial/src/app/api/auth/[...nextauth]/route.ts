import NextAuth from "next-auth/next";
import { options } from "./options";

const handler = NextAuth(options);

export { handler as GET, handler as POST }; 
//ensures that any GET or POST request sent to the 
// api/auth/[...nextauth]route will be managed by next-auth.js

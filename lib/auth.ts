import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcryptjs";
import {prisma} from '@/lib/prisma'

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  debug: true, 
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/admin'
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "admin@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          console.log("Authorization attempt for email:", credentials?.email);
          
          if (!credentials?.email || !credentials.password) {
            console.log("Missing credentials");
            return null;
          }

          const existingUser = await prisma.user.findUnique({
            where: { email: credentials.email }
          });
          
          console.log("User found:", existingUser ? "Yes" : "No");

          if (!existingUser) {
            console.log("User not found");
            return null;
          }

          const passwordMatch = await compare(credentials.password, existingUser.password);
          console.log("Password match:", passwordMatch);

          if (!passwordMatch) {
            console.log("Password does not match");
            return null;
          }

          return {
            id: existingUser.id.toString(),
            name: existingUser.name,
            email: existingUser.email
          };
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      try {
        if (user) {
          return {
            ...token,
            name: user.name
          };
        }
        return token;
      } catch (error) {
        console.error("JWT callback error:", error);
        return token;
      }
    },
    async session({ session, token }) {
      try {
        return {
          ...session,
          user: {
            ...session.user,
            name: token.name
          }
        };
      } catch (error) {
        console.error("Session callback error:", error);
        return session;
      }
    }
  }
};
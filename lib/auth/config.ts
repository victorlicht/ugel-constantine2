import NextAuth, { getServerSession, NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { verifyPassword } from "./password";

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/auth/login",
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
                    if (!credentials?.email || !credentials.password) {
                        console.log("Missing credentials");
                        return null;
                    }

                    const existingUser = await prisma.user.findUnique({
                        where: { email: credentials.email },
                    });

                    console.log(
                        "Authorization attempt for email:",
                        credentials.email
                    );
                    console.log("User found:", existingUser ? "Yes" : "No");

                    if (!existingUser) {
                        console.log("User not found");
                        return null;
                    }

                    const isValidPassword = await verifyPassword(
                        credentials.password,
                        existingUser.password
                    );
                    if (!isValidPassword) {
                        console.log("Invalid password");
                        throw new Error("Invalid password");
                    }

                    return {
                        id: existingUser.id.toString(),
                        name: existingUser.name,
                        email: existingUser.email,
                        role: existingUser.role,
                        title: existingUser.title,
                    } as User;
                } catch (error) {
                    console.error("Authorization error:", error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.email = user.email;
                token.name = user.name;
                token.title = user.title;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.role = token.role as
                    | "Admin"
                    | "SuperAdmin"
                    | "Moderator"
                    | "Member"
                    | "Journalist";
                session.user.id = token.id as string;
                session.user.email = token.email as string;
                session.user.title = token.title as string;
                session.user.name = token.name as string;
            }
            return session;
        },
    },
};

// export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
export const auth = () => getServerSession(authOptions);

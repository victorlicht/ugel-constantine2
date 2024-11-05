import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/login", // Redirect here if unauthenticated
  },
});

export const config = {
  matcher: ["/admin/:path*"], // Apply middleware to all /admin routes
};

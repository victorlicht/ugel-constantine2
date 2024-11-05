import "next-auth"

declare module "next-auth" {
    interface User {
        id: string;
        name: string;
        email: string;
        title: string;
        role: "Admin" | "SuperAdmin" | "Moderator" | "Member" | "Journalist";   
    }
    interface Session {
        user: User;          // Ensure the session has a user of type User
    }
}


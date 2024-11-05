"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Button handler to navigate to dashboard
  const handleDashboardClick = () => {
    router.push("/admin/dashboard");
  };

  // Show loading state while session status is being checked
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {status === "authenticated" && session.user ? (
        <>
          <h1>Welcome, {session.user.name}</h1>
          <p>Title: {session.user.title}</p>
          <button onClick={handleDashboardClick}>Go to Dashboard</button>
        </>
      ) : (
        <p>Redirecting to login...</p>
      )}
    </div>
  );
}

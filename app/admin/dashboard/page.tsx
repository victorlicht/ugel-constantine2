"use client"
import { signOut, useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();
  

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      <p>Email: {session.user?.email}</p>
      <p>Title: {session.user?.title}</p>
      <p>Role: {session.user?.role}</p>
      <button onClick={() => signOut({ callbackUrl: '/auth/login' })}>
        Logout
      </button>
    </div>
  );
}

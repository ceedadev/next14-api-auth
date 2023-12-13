import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth/next";

export default function Home() {
  const session = getServerSession(authConfig);
  return (
    <div>
      <h1>This is Home Page</h1>
      <p>{JSON.stringify(session)}</p>
      <a href="/api/auth/signin">Sign In</a>
    </div>
  );
}

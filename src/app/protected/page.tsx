import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const session = await getServerSession(authConfig);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/protected");
  }
  return (
    <div>
      <h1>Protected Page</h1>
      <p>This Page is Protected</p>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
}

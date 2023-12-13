import { auth } from "@/lib/auth";
export const GET = auth((req: any) => {
  if (req.auth) {
    return Response.json({ data: "Protected data" });
  } else {
    return Response.json({ data: "Not authorized" }, { status: 401 }) as any;
  }
});

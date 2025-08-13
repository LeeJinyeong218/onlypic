import { getUserService } from "@/server/services/test.service";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await getUserService("1");
  console.log(typeof user)
  return NextResponse.json({ user: user });
}
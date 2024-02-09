import { NextRequest, NextResponse } from "next/server";
import shopData from "@/data/shopdata.json";

export async function GET(req: NextRequest) {
  return NextResponse.json(shopData, { status: 200 });
}

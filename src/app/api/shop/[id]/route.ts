import { NextRequest, NextResponse } from "next/server";
import shopData from "@/data/shopdata.json";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/');
  console.log(id[id.length - 1]);

  const data = shopData.filter((value) => value.id === id)
  return NextResponse.json(shopData, { status: 200 });
}

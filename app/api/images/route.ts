 // app/api/images/route.ts
import { NextRequest, NextResponse } from "next/server";

const PICSUM_URL = "https://picsum.photos/v2/list?page=6&limit=6";

interface PicsumImage {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export async function GET() {
  const res = await fetch(PICSUM_URL);

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }

  const data: PicsumImage[] = await res.json();
  const urls = data.map((item) => item.download_url);

  return NextResponse.json(urls);
}
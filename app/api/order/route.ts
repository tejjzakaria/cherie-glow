import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("[order] POST received");

  let body: unknown;
  try {
    body = await req.json();
    console.log("[order] body:", JSON.stringify(body));
  } catch (e) {
    console.error("[order] failed to parse request body:", e);
    return NextResponse.json({ error: "invalid JSON body" }, { status: 400 });
  }

  const sheetUrl = process.env.SHEET_URL;
  if (!sheetUrl) {
    console.error("[order] SHEET_URL env var is missing");
    return NextResponse.json({ error: "SHEET_URL not configured" }, { status: 500 });
  }
  console.log("[order] sending to sheet:", sheetUrl);

  let res: Response;
  try {
    res = await fetch(sheetUrl, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(body),
    });
  } catch (e) {
    console.error("[order] fetch to sheet threw:", e);
    return NextResponse.json({ error: "fetch failed", detail: String(e) }, { status: 502 });
  }

  const text = await res.text();
  console.log("[order] sheet responded status:", res.status, "body:", text);

  if (!res.ok) {
    return NextResponse.json({ error: "sheet error", status: res.status, body: text }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

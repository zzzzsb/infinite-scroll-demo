import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  //const { searchParams } = new URL(request.url);
  const searchParams = request.nextUrl.searchParams;

  // ~?lang=ko query string 값 받아와서 처리 가능
  return Response.json("GET METHOD: " + searchParams.get("lang"));
}

export async function POST(request: Request) {
  const data = await request.json();
  return Response.json(data);
}

export async function PUT(request: Request) {
  return Response.json("PUT METHOD");
}

export async function PATCH(request: Request) {
  return Response.json("PATCH METHOD");
}

export async function DELETE(request: Request) {
  return Response.json("DELETE METHOD");
}

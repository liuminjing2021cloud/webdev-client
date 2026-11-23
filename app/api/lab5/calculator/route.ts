import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const a = Number.parseFloat(searchParams.get("a") ?? "");
  const b = Number.parseFloat(searchParams.get("b") ?? "");
  const operation = searchParams.get("operation");
  if (Number.isNaN(a) || Number.isNaN(b)) return Response.json({ error: "Invalid numbers" }, { status: 400 });
  if (operation === "divide" && b === 0) return Response.json({ error: "Cannot divide by zero" }, { status: 400 });
  const calculations: Record<string, number> = { add: a + b, subtract: a - b, multiply: a * b, divide: a / b };
  if (!operation || !(operation in calculations)) return Response.json({ error: "Unknown operation" }, { status: 400 });
  return Response.json({ a, b, operation, result: calculations[operation] });
}

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ exam: "xat", message: "Questions endpoint — connect to Supabase for question bank", categories: ["Verbal & Logical Ability","Decision Making","Quantitative Ability & Data Interpretation","General Knowledge"] });
}

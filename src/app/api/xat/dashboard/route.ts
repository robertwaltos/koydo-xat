import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ exam: "xat", message: "Dashboard endpoint — connect to Supabase for live data", sections: ["Verbal & Logical Ability","Decision Making","Quantitative Ability & Data Interpretation","General Knowledge"] });
}

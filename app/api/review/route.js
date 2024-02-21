import connectMongoDb from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Review from "@/models/review";

export async function POST(request) {
  const { userName, starCount, descriptions } = await request.json();

  console.log(userName, starCount, descriptions);
  await connectMongoDb();
  await Review.create({ userName, starCount, descriptions });
  return NextResponse.json({ message: "Review submitted" }, { status: 201 });
}

export async function GET() {
  await connectMongoDb();
  const reviews = await Review.find();

  return NextResponse.json({ reviews });
}

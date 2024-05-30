import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = +(searchParams.get("take") ?? "10");
  const skip = +(searchParams.get("skip") ?? "0");

  if (isNaN(take))
    return NextResponse.json(
      { message: "take have to be a number" },
      { status: 400 }
    );
  if (isNaN(skip))
    return NextResponse.json(
      { message: "skip have to be a number" },
      { status: 400 }
    );

  const todos = await prisma.todo.findMany({ take, skip });

  return NextResponse.json({ todos });
}

const postSchema = yup.object({
  description: yup.string().required(),
  completed: yup.boolean().optional().default(false),
});

export async function POST(request: Request) {
  try {
    const { description, completed } = await request.json();
    const body = await postSchema.validate({ description, completed });
    const todo = await prisma.todo.create({ data: body });
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    await prisma.todo.deleteMany({ where: { completed: true } });
    return NextResponse.json("Deleted todos completed");
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

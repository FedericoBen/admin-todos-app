import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

interface argsInterface {
  params: {
    id: string;
  };
}

const getTodo = async (id: string): Promise<Todo | null> =>
  (await prisma.todo.findFirst({ where: { id } })) || null;

export async function GET(request: Request, { params }: argsInterface) {
  const { id } = params;
  const todo = await getTodo(id);
  return NextResponse.json({ todo });
}

const putSchema = yup.object({
  description: yup.string().optional(),
  completed: yup.boolean().optional(),
});

export async function PUT(request: Request, { params }: argsInterface) {
  const { id } = params;
  const todo = await getTodo(id);

  try {
    const { description, completed } = await request.json();
    const body = await putSchema.validate({ description, completed });

    const updateTodo = await prisma.todo.update({
      where: { id },
      data: { ...todo, ...body },
    });

    return NextResponse.json(updateTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

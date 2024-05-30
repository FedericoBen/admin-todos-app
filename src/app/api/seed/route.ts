import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  //*Purgar la base de datos
  await prisma.todo.deleteMany();

  const todos = await prisma.todo.createMany({
    data: [
      {
        description: "Piedra del alma",
        completed: true,
      },
      { description: "Piedra del poder" },
      { description: "Piedra del tiempo" },
      { description: "Piedra del espacio" },
      { description: "Piedra del realidad" },
    ],
  });
  return NextResponse.json({ message: "Seed executed", todosLoad: todos });
}
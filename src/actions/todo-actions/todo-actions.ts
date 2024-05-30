"use server";

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const toggleTodo = async (
  id: string,
  completed: boolean
): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({ where: { id } });
  if (!todo) throw `Todo with id ${id} not find`;

  const updateTodo = await prisma.todo.update({
    where: { id },
    data: { completed },
  });

  revalidatePath("/dashboard/server-todos");

  return updateTodo;
};

interface respAddTodoInterface {
  data: Todo | null;
  error: string | null;
}

export const addTodo = async (
  description: string
): Promise<respAddTodoInterface> => {
  try {
    const todo = await prisma.todo.create({ data: { description } });
    revalidatePath("/dashboard/server-todos");
    return {
      data: todo,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: `Error create todo`,
    };
  }
};

interface respDeleteCompletedInterface {
  data: boolean | null;
  error: string | null;
}

export const deleteCompleted = async (): Promise<void> => {
//   try {
    await prisma.todo.deleteMany({ where: { completed: true } });
    revalidatePath("/dashboard/server-todos");
    // return {
    //   data: true,
    //   error: null,
    // };
//   } catch (error) {
//     // return {
//     //   data: null,
//     //   error: `Error delete completed todos`,
//     // };
//   }
};

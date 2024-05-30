export const dynamic ='force-dynamic';
export const revalidate = 0;

import NewTodo from "@/components/collections/NewTodo/NewTodo";
import TodoGrid from "@/components/collections/TodoGrid/TodoGrid";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Todos list",
  description: "Todos list",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { createAt: "asc" } });
  return (
    <>
      <NewTodo />
      <TodoGrid todos={todos} />
    </>
  );
}

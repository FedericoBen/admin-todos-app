export const dynamic ='force-dynamic';
export const revalidate = 0;

import NewTodo from "@/components/collections/NewTodoServerActions/NewTodo";
import TodoGrid from "@/components/collections/TodoGrid/TodoGrid";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Todos list (server actions)",
  description: "Todos list applying server actions",
};

export default async function ServerTodos() {
  const todos = await prisma.todo.findMany({ orderBy: { createAt: "asc" } });
  return (
    <>
      <NewTodo />
      <TodoGrid todos={todos} />
    </>
  );
}

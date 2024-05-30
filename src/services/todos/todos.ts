import { Todo } from "@prisma/client";

export const updateTodo = async (
  id: string,
  completed: boolean
): Promise<Todo> => {
  const body = JSON.stringify({ completed });
  const todo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());

  return todo;
};

export const createTodo = async (description: string): Promise<Todo> => {
  const body = JSON.stringify({ description });
  const todo = await fetch(`/api/todos`, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());

  return todo;
};

export const deleteTodosCompleted = async (): Promise<boolean> => {
  await fetch(`/api/todos`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());

  return true;
};

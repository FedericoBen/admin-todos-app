'use client'
import { Todo } from "@prisma/client";
import styles from "./TodoGrid.module.scss";
import TodoItem from "@/components/basics/TodoItem/TodoItem";
import { toggleTodo } from "@/actions/todo-actions/todo-actions";

interface TodoGridProps {
  todos?: Todo[];
}

const TodoGrid = ({ todos = [] }: TodoGridProps) => {

  return (
    <div className={styles.container_todo_grid}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          description={todo.description}
          completed={todo.completed}
          id={todo.id}
          onClick={toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoGrid;

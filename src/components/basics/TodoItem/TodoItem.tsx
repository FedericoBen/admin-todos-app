"use client";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
import styles from "./TodoItem.module.scss";
import { startTransition, useOptimistic } from "react";

interface TodoItemProps {
  description: string;
  completed: boolean;
  id: string;
  onClick: (id: string, completed: boolean) => void;
}

const TodoItem = ({ description, completed, id, onClick }: TodoItemProps) => {
  const [clickOptimistic, toggleClickOptimistic] = useOptimistic(
    {
      description,
      completed,
      id,
      onClick,
    },
    (state, newCompletedValue: boolean) => ({
      ...state,
      completed: newCompletedValue,
    })
  );

  const onToggleClick = async () => {
    try {
      startTransition(() => toggleClickOptimistic(!clickOptimistic.completed));
      await onClick(clickOptimistic.id, !clickOptimistic.completed);
    } catch (error) {
      startTransition(() => toggleClickOptimistic(!clickOptimistic.completed));
    }
  };

  return (
    <div
      onClick={onToggleClick}
      className={`${styles.container_todo_item} ${
        clickOptimistic.completed && styles.completed
      }`}
    >
      {clickOptimistic.completed ? (
        <IoCheckboxOutline size={20} />
      ) : (
        <IoSquareOutline size={20} />
      )}
      <span
        className={styles.description}
        style={{
          textDecoration: clickOptimistic.completed ? "line-through" : "",
        }}
      >
        {clickOptimistic.description}
      </span>
    </div>
  );
};

export default TodoItem;

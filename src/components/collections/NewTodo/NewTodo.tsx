"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./NewTodo.module.scss";
import Input from "@/components/basics/Input/Input";
import Button from "@/components/basics/Button/Button";
import { createTodo, deleteTodosCompleted } from "@/services/todos/todos";
import { useRouter } from "next/navigation";

const NewTodo = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue) return;
    await createTodo(inputValue);
    setInputValue("");
    router.refresh();
  };

  const deleteTodos = async () => {
    await deleteTodosCompleted();
    router.refresh();
  };

  return (
    <form onSubmit={onSubmit} className={styles.container_new_todo}>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className={styles.container_buttons}>
        <Button type={"onSubmit"} disable={!inputValue}>
          Add
        </Button>
        <Button onClick={deleteTodos} type={"reset"}>
          Delete
        </Button>
      </div>
    </form>
  );
};

export default NewTodo;

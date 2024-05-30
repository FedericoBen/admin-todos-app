'use client'
import { CSSProperties, ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import styles from "./Input.module.scss";

interface inputProps {
  value: string;
  name?: string;
  onChange: (v: ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties
}

const Input = ({ value, name, onChange, style={} }: inputProps) => {
  const [inputActive, setInputActive] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const stylesPlaceholder = useMemo(
    () => ({
      top: value ? "2px" : "8px",
      fontSize: value ? "12px" : "16px",
    }),
    [value]
  );

  const handlerFocusInput = () => {
    inputRef?.current?.focus();
    setInputActive(true);
  };

  useEffect(() => {
    const defuseInput = (e: MouseEvent) => {
      if (!inputRef.current) return;
      !e.composedPath().includes(inputRef.current);
      setInputActive(false);
    };
    document.body.addEventListener("click", defuseInput);
    return () => {
      document.body.removeEventListener("click", defuseInput);
    };
  }, [value]);
  
  return (
    <label
      className={styles.container_input}
      style={{
        border: inputActive ? "2px solid rgb(120, 199, 255)" : "none",
        ...style
      }}
      onClick={handlerFocusInput}
    >
      <span style={{ ...stylesPlaceholder }} className={styles.placeholder}>
        What new task you want to add?
      </span>
      <input
        ref={inputRef}
        value={value}
        name={name}
        onChange={(e) => onChange(e)}
        type="text"
        placeholder=""
      />
    </label>
  );
};

export default Input;

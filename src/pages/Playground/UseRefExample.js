import { useRef } from "react";

export default function UseRefExample() {
  const inputRef = useRef(null);

  const enfocarInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Escribe algo..." />
      <button onClick={enfocarInput}>buscar</button>
    </div>
  );
}
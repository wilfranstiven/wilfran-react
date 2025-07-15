import { useState, useEffect } from "react";

export default function UseEffectExample() {
  const [message, setMessage] = useState("Hola");

  useEffect(() => {
    console.log("El mensaje cambió:", message);
  }, [message]);

  return (
    <div>
      <h2>Mensaje: {message}</h2>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
    </div>
  );
}
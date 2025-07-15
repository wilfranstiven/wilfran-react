import { useState } from "react";

function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí iría la lógica para enviar el correo de recuperación
      console.log("Solicitud de recuperación para:", email);
      alert(`Si ${email} está registrado, se enviarán instrucciones para recuperar la contraseña.`);
      setEmail(""); // limpiar campo
    };
  
    return (
      <div>
        <h1>Recuperar Contraseña</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Correo electrónico:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="ejemplo@correo.com"
            />
          </div>
          <button type="submit">Enviar instrucciones</button>
        </form>
      </div>
    );
  }
  
  export default ForgotPasswordPage;
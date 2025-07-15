import { useState } from "react";

function RegisterPage() {
    const [formData, setFormData] = useState({
      nombre: "",
      edad: "",
      genero: "",
      telefono: "",
      correo: "",
      pais: "Colombia", // por defecto Colombia
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí podrías enviar los datos a un servidor o procesarlos
      console.log("Datos registrados:", formData);
      alert("Registro enviado. Revisa la consola.");
    };
  
    return (
      <div>
        <h1>Registro de Usuario</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
  
          <div>
            <label>Edad:</label>
            <input
              type="number"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              required
              min="0"
            />
          </div>
  
          <div>
            <label>Género:</label>
            <select
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
          </div>
  
          <div>
            <label>Teléfono:</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              pattern="[0-9]{7,15}"
              title="Ingresa un número válido (7 a 15 dígitos)"
            />
          </div>
  
          <div>
            <label>Correo electrónico:</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>
  
          <div>
            <label>País de origen:</label>
            <select
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              required
            >
              <option value="Colombia">Colombia</option>
              <option value="Argentina">Argentina</option>
              <option value="México">México</option>
              <option value="Perú">Perú</option>
              <option value="Chile">Chile</option>
              {/* Puedes agregar más países aquí */}
            </select>
          </div>
  
          <button type="submit">Registrar</button>
        </form>
      </div>
    );
  }
  
  export default RegisterPage;
  
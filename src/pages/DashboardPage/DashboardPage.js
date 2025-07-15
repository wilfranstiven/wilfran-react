import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../../firebase';

function DashboardPage() {
    const navigate = useNavigate();

    const CerrarSesion = async () => {
      try{
        await signOut(auth);
        navigate('/');
      } catch (error){
        console.error("Error al cerrar sesion:", error);
      }
    };

    const styles = {
      container: {
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      header: {
        fontSize: "2.5rem",
        marginBottom: "10px",
      },
      subtitle: {
        fontSize: "1.2rem",
        marginBottom: "40px",
        opacity: 0.8,
      },
      cardContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        width: "100%",
        maxWidth: "900px",
      },
      card: {
        background: "rgba(255, 255, 255, 0.15)",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        transition: "transform 0.3s ease",
        cursor: "pointer",
        color: "#fff",
      },
      cardHover: {
        transform: "scale(1.05)",
      },
      cardTitle: {
        fontSize: "1.3rem",
        marginBottom: "10px",
      },
      cardContent: {
        fontSize: "1rem",
        lineHeight: 1.4,
        opacity: 0.9,
      },
    };
  
    // Para efecto hover, simple manejo con React state
    const [hoveredCard, setHoveredCard] = React.useState(null);
  
    const cards = [
      {
        title: "Perfil de usuario",
        content: "Actualiza tu información personal y preferencias.",
      },
      {
        title: "Configuraciones",
        content: "Gestiona tus opciones de cuenta y privacidad.",
      },
      {
        title: "Notificaciones",
        content: "Configura cómo y cuándo recibir alertas.",
      },
      {
        title: "Soporte",
        content: "Contacta al equipo de ayuda o revisa preguntas frecuentes.",
      },
    ];
  
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>Bienvenido al Dashboard</h1>
        <button onClick={CerrarSesion}>CERRAR SESION</button>
        <p style={styles.subtitle}>Aquí puedes gestionar tu cuenta y más</p>
  
        <div style={styles.cardContainer}>
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                ...(hoveredCard === index ? styles.cardHover : {}),
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h2 style={styles.cardTitle}>{card.title}</h2>
              <p style={styles.cardContent}>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default DashboardPage;
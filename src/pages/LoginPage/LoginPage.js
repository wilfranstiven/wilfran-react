import './LoginPage.css';
import Swal from 'sweetalert2';
import { auth, googleProvider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';

function LoginPage() {
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                Swal.fire({
                    title: "¡Bienvenido!",
                    text: `Sesión iniciada con Google: ${user.email}`,
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    window.location.href = "/dashboard";
                });
            })
            .catch((error) => {
                console.error(error);
                Swal.fire("Error", "No se puede iniciar sesión con Google.", "error");
            });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300, margin: 'auto', marginTop: '100px' }}>
            <h2>Iniciar Sesión</h2>
            <input type="text" placeholder="Usuario" style={{ marginBottom: '10px', padding: '8px' }} />
            <input type="password" placeholder="Contraseña" style={{ marginBottom: '10px', padding: '8px' }} />
            <button style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>
                Entrar
            </button>
            <button type="button" onClick={handleGoogleLogin}>
                Iniciar sesión con Google
            </button>
            <a href="/register">¿No tienes cuenta? Regístrate </a><br />
            <a href="/forgot">¿Olvidaste tu contraseña?</a>
        </div>
    );
}

export default LoginPage;
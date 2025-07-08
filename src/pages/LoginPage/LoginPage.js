import './LoginPage.css';

function LoginPage(){
    return (
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300, margin: 'auto', marginTop: '100px' }}>
            <h2>Iniciar Sesión</h2>
            <input type="text" placeholder="Usuario" style={{ marginBottom: '10px', padding: '8px' }} />
            <input type="password" placeholder="Contraseña" style={{ marginBottom: '10px', padding: '8px' }} />
            <button style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>
                Entrar
            </button>
        </div>
    );
}
export default LoginPage;
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      {/* Contenedor principal centrado vertical y horizontalmente */}
      
      <div className="text-center">
        {/* Logo e imagen de marca */}
        <div className="mb-4">
          <img src="/Log.png" alt="CodeMatch Logo" style={{ height: '60px' }} />
        </div>

        {/* Caja blanca con sombra para el formulario */}
        <div className="p-4 bg-white rounded-4 shadow" style={{ minWidth: '300px' }}>
          <h3 className="mb-4">¡Bienvenido!</h3>
          
          <form>
            {/* Campo de correo */}
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Correo Electrónico" />
            </div>

            {/* Campo de contraseña */}
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Contraseña" />
            </div>

            {/* Botón de iniciar sesión */}
            <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
          </form>

          {/* Enlace de registro */}
          <div className="mt-3">
            <a href="#">Registrarte ahora</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

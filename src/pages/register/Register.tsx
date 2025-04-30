import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  return (
    <div className="min-vh-100 bg-light px-4 pt-3 py-5">
      {/* Encabezado con logo y título */}
      <div className="container mb-4">
        <div className="row align-items-center">
          <div className="col-auto">
            <div className="d-flex align-items-center">
              <img src="/Log.png" alt="CodeMatch Logo" style={{ height: '50px', marginLeft: '-20px' }} />
            </div>
          </div>
          <div className="col text-center">
            <h4 className="m-0" 
                style={{ 
                    position: 'relative', 
                    left: '-50px' 
                    }}
            >
              ¡Haz match con tu próxima gran oportunidad!
            </h4>
          </div>
        </div>
      </div>

      {/* Formulario */}
      <div className="text-center">
        <div className="mx-auto p-4 bg-white rounded-4 shadow" style={{ maxWidth: '400px' }}>
          <form>
            <div className="mb-3 text-start">
              <label className="form-label">Nombre completo</label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3 text-start">
              <label className="form-label">Cédula</label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3 text-start">
              <label className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" />
            </div>

            <div className="mb-3 text-start">
              <label className="form-label">Contraseña</label>
              <input type="password" className="form-control" />
            </div>

            <div className="mb-3 text-start">
              <label className="form-label">Número celular</label>
              <input type="tel" className="form-control" />
            </div>

            <div className="mb-3 text-start">
              <label className="form-label">País</label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3 text-start">
              <label className="form-label">Departamento</label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-4 text-start">
              <label className="form-label">Municipio</label>
              <input type="text" className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary w-100">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;



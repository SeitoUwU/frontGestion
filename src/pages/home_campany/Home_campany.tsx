import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Ofertas: React.FC = () => {
  return (
    <div className="bg-light min-vh-100">
      {/* Encabezado fijo azul */}
      <div className="bg-primary w-100 d-flex align-items-center px-3 py-2 text-white sticky-top" style={{ zIndex: 1020 }}>
        <img src="/Log_blanco.png" alt="CodeMatch" style={{ height: '45px' }} className="me-2" />
        <input type="text" className="form-control ms-2" placeholder="Buscar" />
      </div>

      {/* Contenedor general */}
      <div className="container-fluid mt-3">
        <div className="row">
          {/* Columna izquierda - Perfil */}
          <div className="col-md-2 px-2">
            {/* Recuadro blanco del perfil */}
            <div className="bg-white rounded shadow-sm overflow-hidden pb-3">
              {/* Fondo azul */}
              <div className="bg-info" style={{ height: '60px' }}></div>

              {/* Imagen de usuario */}
              <div className="d-flex align-items-center px-3" style={{ marginTop: '-30px' }}>
                <img
                  src="/perfil.jpg"
                  alt="Empresa"
                  className="rounded-circle border border-white"
                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
              </div>

              {/* Nombre y ciudad */}
              <div className="ms-3">
                <p className="fw-bold mb-0 text-truncate" title="DevTech S.A">
                  DevTech S.A
                </p>
                <small className="text-muted">Medellín, Antioquia</small><br />
                <small className="text-muted">Carrera 43 #22-33</small><br />
                <small className="text-muted">NIT: 900123456</small>
              </div>
            </div>

            {/* Botón de acción */}
            <div className="mt-3 d-grid gap-2">
              <button className="btn btn-outline-primary w-100 text-start">
                Crear oferta
              </button>
            </div>
          </div>

          {/* Columna derecha - Ofertas */}
          <div className="col-md-10 px-3">
            {/* Título */}
            <div className="bg-white rounded shadow-sm p-2 mb-2 text-center">
              <h5 className="m-0">Ofertas Laborales</h5>
            </div>

            {/* Lista de ofertas */}
            <div className="bg-white rounded shadow-sm p-3">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="mb-4">
                  <h6 className="text-primary mb-1">Desarrollador Web</h6>
                  <p className="mb-1 small">
                    Buscamos desarrollador web con sólidos conocimientos en JavaScript y Python.
                  </p>
                  <small className="text-muted">Experiencia mínima de 2 años</small>

                  <div className="d-flex flex-wrap gap-2 justify-content-end mt-2">
                    <button className="btn btn-primary btn-sm">Ver postulados</button>
                    <button className="btn btn-success btn-sm">Editar oferta</button>
                    <button className="btn btn-danger btn-sm">Eliminar oferta</button>
                  </div>

                  {/* Línea divisoria entre ofertas */}
                  {i < 2 && <hr />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ofertas;

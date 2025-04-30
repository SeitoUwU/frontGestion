import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Postulados: React.FC = () => {
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

              {/* Imagen de empresa */}
              <div className="d-flex align-items-center px-3" style={{ marginTop: '-30px' }}>
                <img
                  src="/perfil.jpg"
                  alt="Empresa"
                  className="rounded-circle border border-white"
                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
              </div>

              {/* Nombre, ciudad y NIT */}
              <div className="ms-3">
                <p className="fw-bold mb-0 text-truncate" title="DevTech S.A">
                  DevTech S.A
                </p>
                <small className="text-muted">Medellín, Antioquia</small><br />
                <small className="text-muted">Carrera 43 #22-33</small><br />
                <small className="text-muted">NIT: 900123456</small>
              </div>
            </div>
          </div>

          {/* Columna derecha - Postulados */}
          <div className="col-md-10 px-3">
            {/* Título */}
            <div className="bg-white rounded shadow-sm p-2 mb-2 text-center">
              <h5 className="m-0">Postulados</h5>
            </div>

            {/* Lista de postulados */}
            <div className="bg-white rounded shadow-sm p-3">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="d-flex align-items-center mb-3 p-3 border rounded">
                  <img
                    src="/perfil.jpg"
                    alt="Postulado"
                    className="rounded-circle border border-2"
                    style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '15px' }}
                  />
                  <div>
                    <h6 className="text-primary mb-1">Karol Gisela Ramos</h6>
                    <small className="d-block text-muted">Florencia, Caquetá</small>
                    <small className="d-block text-muted">Correo</small>
                    <small className="d-block text-muted">Celular</small>
                    <small className="d-block text-muted">Oferta laboral</small>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Postulados;

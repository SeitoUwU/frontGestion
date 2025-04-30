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
                                    className="rounded-circle border border-white"
                                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                />
                            </div>

                            {/* Nombre y ciudad */}
                            <div className="ms-3">
                                <p className="fw-bold mb-0 text-truncate" title="Karol Gisela Ramos">
                                    Karol Gisela Ramos
                                </p>
                                <small className="text-muted">Florencia, Caquetá</small>
                            </div>
                        </div>

                        {/* Botones de acciones */}
                        <div className="mt-3 d-grid gap-2">
                            <a
                                href="/ofertas-aplicadas"
                                className="btn btn-outline-primary w-100 text-start"
                            >
                                Ofertas aplicadas
                            </a>
                            <button className="btn btn-outline-secondary w-100 text-start">
                                ➕ Hoja de vida
                            </button>
                        </div>
                    </div>

                    {/* Columna derecha - Ofertas Aplicadas */}
                    <div className="col-md-10 px-3">
                        {/* Título */}
                        <div className="bg-white rounded shadow-sm p-2 mb-2 text-center">
                            <h5 className="m-0">Ofertas Aplicadas</h5>
                        </div>

                        {/* Oferta aplicada */}
                        <div className="bg-white rounded shadow-sm p-3">
                            <h6 className="text-primary mb-1">DevTech S.A</h6>
                            <p className="mb-1 small">
                                Buscamos desarrollador web con sólidos conocimientos en JavaScript y Python.
                            </p>
                            <small className="text-muted">Experiencia mínima de 2 años</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ofertas;

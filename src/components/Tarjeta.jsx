import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import LOGO from '../assets/img/header-logo-v2.png'; // Asegúrate de que este archivo existe
import QR from '../assets/img/sample-qr.png'; // Asegúrate de que este archivo existe

const TarjetaPresentacion = ({ datos }) => {
    const { nombre, puesto, telefono, correo, sitio } = datos;
    const azulMedio = '#337ab7'; // Azul intermedio
    const naranja = '#f1a61a'; // Color durazno

    const tarjetaRef = useRef(null);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f7f7f7',
        }}>
            <div ref={tarjetaRef} style={{
                borderRadius: '8px',
                width: '600px',
                height: '300px',
                padding: '20px',
                fontFamily: 'Arial, sans-serif',
                display: 'grid',
                gridTemplateColumns: '70% 30%',
                gridTemplateRows: '50% 50%',
                gridTemplateAreas: `
                    "logo logo"
                    "info qr"
                `,
                backgroundColor: '#fff',
                position: 'relative',
                overflow: 'hidden',
                border: '2px solid #ccc',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}>
                {/* Logo de la Empresa */}
                <div style={{
                    gridArea: 'logo',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    paddingBottom: '10px',
                    paddingLeft: '140px',
                }}>
                    <img src={LOGO} style={{ width: '390px', height: 'auto' }} alt="Logo de la Empresa" />
                </div>

                {/* Sección de Información */}
                <div style={{
                    gridArea: 'info',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    width: '90%',
                    height: '80%',
                    margin: '0 0 0 10px',
                }}>
                    <h2 style={{ fontWeight: '700', fontSize: '24px', color: azulMedio, margin: '0', textAlign: 'center' }}>
                        {nombre}
                    </h2>
                    <h3 style={{ fontWeight: '600', fontSize: '20px', color: naranja, marginTop: '4px', textAlign: 'center' }}>
                        {puesto}
                    </h3>
                    <div style={{ marginTop: '10px', fontSize: '16px', color: '#000' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', justifyContent: 'flex-start' }}>
                            <span style={{
                                color: '#fff',
                                backgroundColor: azulMedio,
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: '8px'
                            }}>
                                <FontAwesomeIcon icon={faPhone} style={{ fontSize: '16px' }} />
                            </span>
                            <span>{telefono}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', justifyContent: 'flex-start' }}>
                            <span style={{
                                color: '#fff',
                                backgroundColor: azulMedio,
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: '8px'
                            }}>
                                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '16px' }} />
                            </span>
                            <span>{correo}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <span style={{
                                color: '#fff',
                                backgroundColor: azulMedio,
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: '8px'
                            }}>
                                <FontAwesomeIcon icon={faGlobe} style={{ fontSize: '16px' }} />
                            </span>
                            <span>{sitio}</span>
                        </div>
                    </div>
                </div>

                {/* Círculo azul y círculo blanco con QR centrado */}
                <div style={{
                    position: 'absolute',
                    bottom: '-50px',
                    right: '-50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {/* Círculo Azul */}
                    <div style={{
                        width: '180px',
                        height: '180px',
                        backgroundColor: azulMedio,
                        borderRadius: '50%',
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        {/* Círculo Blanco con margen extra */}
                        <div style={{
                            width: '140px',
                            height: '140px',
                            backgroundColor: '#fff',
                            borderRadius: '50%',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            {/* Imagen QR centrada con más espacio alrededor */}
                            <img src={QR} alt="Código QR" style={{
                                width: '80px',
                                height: 'auto',
                                padding: '10px'
                            }} />
                        </div>
                    </div>
                </div>

                {/* Borde azul recto */}
                <div style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    width: '20px',
                    height: 'calc(100% - 110px)',
                    backgroundColor: azulMedio,
                    borderRadius: '0',
                }} />
            </div>
        </div>
    );
};

export default TarjetaPresentacion;

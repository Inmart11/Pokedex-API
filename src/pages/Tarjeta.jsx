import React from 'react';
import { Box, Typography } from '@mui/material';

const Tarjeta = ({ datos }) => {
    return (
        <Box sx={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
            <Typography variant="h5">{datos.nombre}</Typography>
            <Typography variant="subtitle1">{datos.puesto}</Typography>
            <Typography variant="body1">Teléfono: {datos.telefono}</Typography>
            <Typography variant="body1">Correo: {datos.correo}</Typography>
            <Typography variant="body1">Sitio: {datos.sitio}</Typography>
            <img src={datos.qr} alt="Código QR" style={{ width: '100px', height: '100px' }} />
        </Box>
    );
};

export default Tarjeta;
    
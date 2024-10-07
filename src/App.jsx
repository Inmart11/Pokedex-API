import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Card from './components/Card'; 
import Spinner from './components/Spinner';
import Sidebar from './components/Sidebar';
import Tarjeta from './components/Tarjeta';
import Items from './pages/Items';
import Locations from './pages/Locations';
import Berries from './pages/Berries';
import Pokemons from './pages/Pokemons';
import Home from './pages/Home';

const datos = {
    nombre: 'Yennifer Hernández',
    puesto: 'Área de Mesa de Ayuda',
    telefono: '55 91 38 07 76',
    correo: 'yhernandez@fliptem.com',
    sitio: 'www.fliptem.com',
    qr: '/path/to/qr_code.png' // Cambia esto a la ruta de tu QR
};

function App() {
    const [activeComponent, setActiveComponent] = useState('items');

    const handleComponentChange = (component) => {
        setActiveComponent(component);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar onComponentChange={handleComponentChange} />
            <Box sx={{ flexGrow: 1, padding: 2 }}>
                {activeComponent === 'tarjeta' && <Tarjeta datos={datos} />}
                {activeComponent === 'items' && <Items />}
                {activeComponent === 'locations' && <Locations />}
                {activeComponent === 'pokemons' && <Pokemons />}
                {activeComponent === 'berries' && <Berries />}
                {activeComponent === 'home' && <Home />}
            </Box>
        </Box>
    );
}

export default App;

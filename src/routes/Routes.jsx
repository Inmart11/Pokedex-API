import { Routes, Route } from 'react-router-dom'; 
import Berries from '../pages/Berries';
import Home from '../pages/Home';
import Items from '../pages/Items';
import Locations from '../pages/Locations';
import Pokemons from '../pages/Pokemons';
import Sidebar from '../components/Sidebar';
import Tarjeta from "../components/Tarjeta";
import { Box } from '@mui/material';

const AppRoutes = ({ datos }) => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/berries" element={<Berries />} />
          <Route path="/items" element={<Items />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/tarjeta" element={<Tarjeta datos={datos} />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default AppRoutes;

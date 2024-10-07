import React from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Bienvenido a la Pokedex
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 2, textAlign: "center" }}>
        Aquí puedes explorar los Pokémon, Berries, Items y más.
      </Typography>
    </Box>
  );
};

export default Home;

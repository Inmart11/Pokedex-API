import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Grid, CircularProgress } from "@mui/material";

const Pokemons = () => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
      const data = await response.json();
      setPokemons(data.results);
      setLoading(false);
    };

    fetchPokemons();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 3, textAlign: "center" }}>
        Pokémon
      </Typography>
      <Grid container spacing={3}>
        {pokemons.map((pokemon, index) => (
          <Grid item xs={12} sm={6} md={4} key={pokemon.name}>
            <Card sx={{ backgroundColor: index % 2 === 0 ? "#fce4ec" : "#e3f2fd" }}>
              <CardContent>
                <Typography variant="h6">{pokemon.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pokemons;

import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Grid, CircularProgress } from "@mui/material";

const Berries = () => {
  const [loading, setLoading] = useState(true);
  const [berries, setBerries] = useState([]);

  useEffect(() => {
    const fetchBerries = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/berry?limit=10");
      const data = await response.json();
      setBerries(data.results);
      setLoading(false);
    };

    fetchBerries();
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
        Berries
      </Typography>
      <Grid container spacing={3}>
        {berries.map((berry, index) => (
          <Grid item xs={12} sm={6} md={4} key={berry.name}>
            <Card sx={{ backgroundColor: index % 2 === 0 ? "#fce4ec" : "#e3f2fd" }}>
              <CardContent>
                <Typography variant="h6">{berry.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Berries;

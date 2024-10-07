import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Grid, CircularProgress } from "@mui/material";

const Locations = () => {
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/location?limit=10");
      const data = await response.json();
      setLocations(data.results);
      setLoading(false);
    };

    fetchLocations();
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
        Locations
      </Typography>
      <Grid container spacing={3}>
        {locations.map((location, index) => (
          <Grid item xs={12} sm={6} md={4} key={location.name}>
            <Card sx={{ backgroundColor: index % 2 === 0 ? "#fce4ec" : "#e3f2fd" }}>
              <CardContent>
                <Typography variant="h6">{location.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Locations;

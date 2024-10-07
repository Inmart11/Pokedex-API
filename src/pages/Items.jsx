import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Grid, CircularProgress } from "@mui/material";

const Items = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/item?limit=10");
      const data = await response.json();
      setItems(data.results);
      setLoading(false);
    };

    fetchItems();
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
        Items
      </Typography>
      <Grid container spacing={3}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={item.name}>
            <Card sx={{ backgroundColor: index % 2 === 0 ? "#fce4ec" : "#e3f2fd" }}>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Items;

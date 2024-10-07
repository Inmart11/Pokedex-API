import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Avatar,
  Button
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EcoIcon from "@mui/icons-material/LocalFlorist";
import InventoryIcon from "@mui/icons-material/Inventory";
import PlaceIcon from "@mui/icons-material/Place";
import PetsIcon from "@mui/icons-material/Pets";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import "../Sidebar.css";

const menuItems = [
  { text: "Tarjeta", icon: <StarIcon />, path: "/tarjeta" },
  { text: "Home", icon: <HomeIcon />, path: "/" },
  { text: "Berries", icon: <EcoIcon />, path: "/berries" },
  { text: "Items", icon: <InventoryIcon />, path: "/items" },
  { text: "Locations", icon: <PlaceIcon />, path: "/locations" },
  { text: "Pokemons", icon: <PetsIcon />, path: "/pokemons" }
];

const Sidebar = ({ onComponentChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleMenuToggle = () => {
    setButtonDisabled(true);
    setIsOpen((prev) => !prev);
    setTimeout(() => setButtonDisabled(false), 300);
  };

  return (
    <Box
      component="nav"
      sx={{
        width: isOpen ? 320 : 80,
        backgroundColor: "#6200EA",
        height: "100vh",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "5px 0 20px rgba(0, 0, 0, 0.5)",
        transition: "width 0.3s ease",
        padding: "10px"
      }}
    >
      <Button
        onClick={handleMenuToggle}
        disabled={isButtonDisabled}
        sx={{
          marginBottom: "10px",
          backgroundColor: "#BB86FC",
          color: "#FFF",
          borderRadius: "20px",
          "&:hover": { backgroundColor: "#9A67EA" }
        }}
      >
        {isOpen ? "Close" : "Menu"}
      </Button>

      {isOpen && (
        <Box sx={{ textAlign: "center", paddingBottom: "20px" }}>
          <Avatar
            alt="Pokedex Logo"
            src="./public/pokenola.png"
            sx={{
              width: 80,
              height: 80,
              margin: "auto",
              marginBottom: "10px",
              border: "3px solid #FFEB3B"
            }}
          />
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFEB3B", fontFamily: "Press Start 2P" }}>
            Mi Pokedex
          </Typography>
          <Typography variant="body2" sx={{ color: "#B0BEC5" }}>
            ¡Bienvenido/a Entrenador Pokémon!
          </Typography>
        </Box>
      )}

      <Divider sx={{ backgroundColor: "#FFEB3B" }} />

      {isOpen && (
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => onComponentChange(item.path.replace("/", ""))} // Elimina la barra inicial para que coincida con el estado activo
              sx={{
                "&:hover": {
                  backgroundColor: "#3700B3",
                  borderRadius: "10px",
                  transition: "background-color 0.3s"
                },
                margin: "5px 0",
                padding: "10px 15px",
                backgroundColor: "rgba(255, 235, 59, 0.2)",
                borderRadius: "10px"
              }}
            >
              <ListItemIcon sx={{ color: "#FFEB3B" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: "#FFFFFF" }} />
            </ListItem>
          ))}
        </List>
      )}

      <Box
        sx={{
          textAlign: "center",
          paddingTop: "20px",
          backgroundColor: "#BB86FC",
          padding: "15px"
        }}
      >
        <Typography variant="caption" sx={{ color: "#FFFFFF" }}>
          © 2024 Mi Pokedex
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;

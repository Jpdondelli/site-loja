// src/components/Header.tsx
"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Link from "next/link"; // Importante para navegação do Next.js

// Lista dos itens do menu
const pages = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Orçamento", href: "#orcamento" },
  { label: "Nossos Trabalhos", href: "#trabalhos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  // Estado para controlar a abertura do menu mobile
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#1e293b" }}>
      {" "}
      {/* Cor de fundo personalizada */}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LOGO - VERSÃO DESKTOP */}
          <Box
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" }, // Esconde no celular, mostra no PC
              alignItems: "center",
            }}
          >
            <Image
              src="/Logo.jpg"
              alt="Logo Vidros e Box Dois Córregos"
              width={150} // Ajuste a largura conforme necessário
              height={150} // Ajuste a altura conforme necessário
              className="rounded-full" // Deixa redonda (se estiver usando Tailwind)
              style={{ borderRadius: "50%" }} // Garante que fique redonda mesmo sem Tailwind
            />
          </Box>

          {/* MENU MOBILE (Hambúrguer) */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu de navegação"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  {/* Link do Next dentro do MenuItem */}
                  <Typography
                    component={Link}
                    href={page.href}
                    textAlign="center"
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                      width: "100%",
                    }}
                  >
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* LOGO - VERSÃO MOBILE (Centralizada) */}
          {/* LOGO - VERSÃO MOBILE COM IMAGEM */}
          <Box
            component={Link}
            href="/"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" }, // Mostra no celular, esconde no PC
              justifyContent: "center", // Centraliza no celular
              alignItems: "center",
            }}
          >
            <Image
              src="/Logo.jpg"
              alt="Logo Vidros e Box Dois Córregos"
              width={100} // Um pouco menor para celular
              height={100}
              style={{ borderRadius: "50%" }}
            />
          </Box>

          {/* MENU DESKTOP (Botões lado a lado) */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link} // O segredo: Botão do MUI agindo como Link do Next
                href={page.href}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

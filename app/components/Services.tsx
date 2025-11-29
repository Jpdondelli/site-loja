"use client";

import Link from "next/link";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const services = [
  {
    title: "Box para Banheiro",
    img: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=600",
    desc: "Vidro temperado, roldanas aparentes e diversas cores.",
  },
  {
    title: "Espelhos",
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600",
    desc: "Espelhos bisotados, lapidados e decorativos.",
  },
  {
    title: "Guarda-Corpo",
    img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=600",
    desc: "Segurança e design para escadas e sacadas.",
  },
  {
    title: "Janelas e Portas",
    img: "https://images.unsplash.com/photo-1502005229762-cf1e2a862d43?auto=format&fit=crop&w=600",
    desc: "Fechamentos em vidro temperado sob medida.",
  },
  {
    title: "Envidraçamento de Sacada",
    img: "https://plus.unsplash.com/premium_photo-1680100256127-e73d3f1f3376?auto=format&fit=crop&w=600",
    desc: "Proteção contra chuva e vento sem perder a vista.",
  },
  {
    title: "Prateleiras",
    img: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=600",
    desc: "Organização e leveza para quartos e salas.",
  },
];

export default function Servicos() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
        color="primary.dark"
      >
        Nossos Serviços
      </Typography>
      <Typography
        variant="h6"
        textAlign="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        Soluções completas em vidro para sua casa
      </Typography>

      <Grid container spacing={4}>
        {services.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                "&:hover": { transform: "scale(1.02)", transition: "0.3s" },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={item.img}
                alt={item.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontWeight="bold"
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button
                  component={Link}
                  href="/orcamento"
                  fullWidth
                  variant="contained"
                  color="warning"
                >
                  Pedir Orçamento
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

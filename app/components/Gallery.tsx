"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  CardActionArea,
} from "@mui/material";

export default function Trabalhos() {
  // Simulando 6 fotos
  const photos = [1, 2, 3, 4, 5, 6];

  return (
    <Container sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          color="primary.dark"
        >
          Galeria de Projetos
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Confira o acabamento dos nossos serviços recentes
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {photos.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item}>
            <CardActionArea>
              <Box
                sx={{
                  bgcolor: "#cbd5e1",
                  height: 300,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Aqui viria a tag <Image /> do Next.js */}
                <Typography color="text.secondary" fontWeight="bold">
                  Foto Trabalho {item}
                </Typography>

                {/* Overlay ao passar o mouse */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    bgcolor: "rgba(0,0,0,0.7)",
                    color: "white",
                    p: 2,
                    opacity: 0,
                    transition: "0.3s",
                    "&:hover": { opacity: 1 },
                  }}
                >
                  <Typography variant="subtitle2">Obra Residencial</Typography>
                </Box>
              </Box>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

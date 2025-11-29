"use client";

import { Box, Container, Grid, Typography, Paper } from "@mui/material";

export default function Sobre() {
  return (
    <Box sx={{ py: 8, bgcolor: "#f8fafc" }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          {/* Lado do Texto */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ borderLeft: "5px solid #f97316", pl: 3, mb: 3 }}>
              <Typography
                variant="h4"
                component="h1"
                fontWeight="bold"
                color="text.primary"
              >
                Sobre a Vidraçaria
              </Typography>
            </Box>

            <Typography paragraph fontSize="1.1rem" color="text.secondary">
              Há anos no mercado de Piracicaba, a{" "}
              <strong>Vidros e Box Dois Córregos</strong>, liderada por Augusto
              Dondelli, se tornou referência em qualidade e confiança.
            </Typography>

            <Typography paragraph fontSize="1.1rem" color="text.secondary">
              Nossa missão é trazer modernidade e segurança para residências e
              comércios, trabalhando com os melhores materiais do mercado. Seja
              um simples espelho ou um fechamento de sacada complexo, tratamos
              cada projeto como único.
            </Typography>
          </Grid>

          {/* Lado da Imagem (Placeholder) */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper
              elevation={6}
              sx={{
                height: 400,
                bgcolor: "#e2e8f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              {/* Aqui você colocaria o componente <Image /> do Next depois */}
              <Typography variant="h6" color="text.disabled">
                Foto da Fachada ou Equipe
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

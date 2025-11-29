"use client";

import { Box, Button, Typography, Container, Paper, Grid } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function Contato() {
  return (
    <Box sx={{ py: 10, bgcolor: "#f8fafc", minHeight: "80vh" }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            color="primary.dark"
          >
            Fale Conosco
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Escolha a melhor forma de atendimento para você
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {/* Card WhatsApp */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box>
              <Paper
                component="a"
                href="https://wa.me/5519988515172"
                target="_blank"
                elevation={2}
                sx={{
                  p: 6,
                  textAlign: "center",
                  display: "block",
                  textDecoration: "none",
                  borderRadius: 4,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                    border: "1px solid #22c55e",
                  },
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 60, color: "#22c55e", mb: 2 }} />
                <Typography variant="h5" fontWeight="bold" color="text.primary">
                  WhatsApp
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
                  (19) 98851-5172
                </Typography>
                <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
                  Clique para conversar
                </Typography>
              </Paper>
            </Box>
          </Grid>

          {/* Card Telefone */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={2}
              sx={{
                p: 6,
                textAlign: "center",
                borderRadius: 4,
                height: "100%",
              }}
            >
              <PhoneIcon sx={{ fontSize: 60, color: "#0f172a", mb: 2 }} />
              <Typography variant="h5" fontWeight="bold">
                Telefone Fixo
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
                (19) 3426-5172
              </Typography>
              <Typography variant="body2" color="text.disabled" sx={{ mt: 2 }}>
                Horário comercial
              </Typography>
            </Paper>
          </Grid>

          {/* Card Email */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              component="a"
              href="mailto:contato@vidrosdoiscorregos.com.br"
              elevation={2}
              sx={{
                p: 6,
                textAlign: "center",
                display: "block",
                textDecoration: "none",
                borderRadius: 4,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                  border: "1px solid #f97316",
                },
              }}
            >
              <EmailIcon sx={{ fontSize: 60, color: "#f97316", mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" color="text.primary">
                E-mail
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mt: 1, wordBreak: "break-all" }}
              >
                contato@vidrosdoiscorregos.com.br
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

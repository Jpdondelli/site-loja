"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Localizacao() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
        color="primary.dark"
      >
        Onde Estamos
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* Informações */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Paper elevation={2} sx={{ p: 4, height: "100%", borderRadius: 2 }}>
            <Box display="flex" gap={2} mb={4}>
              <LocationOnIcon sx={{ fontSize: 40, color: "#f97316" }} />
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Endereço
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Av. Manoel Conceição, 573
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Vila Rezende - Piracicaba/SP
                </Typography>
              </Box>
            </Box>

            <Box display="flex" gap={2}>
              <AccessTimeIcon sx={{ fontSize: 40, color: "#0f172a" }} />
              <Box width="100%">
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Horários
                </Typography>
                <List dense disablePadding>
                  <ListItem
                    disableGutters
                    sx={{ borderBottom: "1px solid #eee" }}
                  >
                    <ListItemText primary="Segunda a Sexta" />
                    <Typography fontWeight="bold">08:00 - 18:00</Typography>
                  </ListItem>
                  <ListItem
                    disableGutters
                    sx={{ borderBottom: "1px solid #eee" }}
                  >
                    <ListItemText primary="Sábado" />
                    <Typography fontWeight="bold">08:00 - 12:00</Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemText
                      primary="Domingo"
                      sx={{ color: "text.disabled" }}
                    />
                    <Typography color="text.disabled">Fechado</Typography>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Mapa */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Paper
            elevation={2}
            sx={{ height: 400, borderRadius: 2, overflow: "hidden" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Av.+Manoel+Conceição,+573+-+Vila+Rezende,+Piracicaba+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

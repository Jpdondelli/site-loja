"use client";

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Paper,
  Divider,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SendIcon from "@mui/icons-material/Send";

export default function Orcamento() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 3 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
          color="primary.dark"
        >
          Solicite um Orçamento
        </Typography>
        <Typography textAlign="center" color="text.secondary" mb={4}>
          Preencha o formulário ou fale direto no WhatsApp
        </Typography>

        <Button
          href="https://wa.me/5519988515172"
          target="_blank"
          variant="contained"
          color="success"
          fullWidth
          size="large"
          startIcon={<WhatsAppIcon />}
          sx={{ mb: 4, py: 1.5, fontSize: "1.1rem" }}
        >
          Chamar no WhatsApp
        </Button>

        <Divider sx={{ mb: 4 }}>OU POR E-MAIL</Divider>

        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <TextField label="Seu Nome" variant="outlined" fullWidth required />
          <TextField
            label="Telefone / WhatsApp"
            variant="outlined"
            fullWidth
            required
          />

          <TextField select label="Tipo de Serviço" defaultValue="" fullWidth>
            <MenuItem value="box">Box de Banheiro</MenuItem>
            <MenuItem value="espelho">Espelho</MenuItem>
            <MenuItem value="sacada">Envidraçamento de Sacada</MenuItem>
            <MenuItem value="outro">Outro</MenuItem>
          </TextField>

          <TextField
            label="Medidas Aproximadas (Opcional)"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Detalhes do Pedido"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />

          <Button
            variant="contained"
            size="large"
            endIcon={<SendIcon />}
            sx={{ bgcolor: "#0f172a", py: 1.5, mt: 2 }}
          >
            Enviar Solicitação
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

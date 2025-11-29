"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  Typography,
  Container,
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemText,
  TextField,
  MenuItem,
  CardActionArea,
  Divider,
  Grid,
} from "@mui/material";

// Ícones
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* =================================================================================
          SEÇÃO 1: INÍCIO (Hero)
         ================================================================================= */}
        <Box
          id="inicio" // <--- ID PARA O LINK FUNCIONAR
          sx={{
            height: { xs: "500px", md: "600px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // Lembre de colocar sua imagem na pasta public com esse nome
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/fundo-site.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            textAlign: "center",
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h2"
              component="h1"
              fontWeight="bold"
              gutterBottom
              sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
            >
              Vidros e Box{" "}
              <Box component="span" sx={{ color: "#f97316" }}>
                Dois Córregos
              </Box>
            </Typography>

            <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
              Transforme seu ambiente com elegância e segurança. Especialistas
              em vidros temperados e acabamentos.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                component={Link}
                href="#orcamento" // Joga para a seção de orçamento
                variant="contained"
                size="large"
                color="warning"
                endIcon={<ArrowForwardIcon />}
                sx={{ fontWeight: "bold", px: 4, py: 1.5 }}
              >
                Solicitar Orçamento
              </Button>
              <Button
                component={Link}
                href="#trabalhos" // Joga para a galeria
                variant="outlined"
                size="large"
                sx={{
                  color: "white",
                  borderColor: "white",
                  px: 4,
                  py: 1.5,
                  "&:hover": { borderColor: "#f97316", color: "#f97316" },
                }}
              >
                Nossos Trabalhos
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Diferenciais (Ainda parte do início) */}
        <Box sx={{ py: 8, bgcolor: "white" }}>
          <Container>
            <Grid container spacing={4}>
              {[
                {
                  title: "Qualidade Premium",
                  desc: "Vidros temperados certificados e ferragens de alta durabilidade.",
                },
                {
                  title: "Instalação Rápida",
                  desc: "Equipe técnica treinada para uma instalação limpa e pontual.",
                },
                {
                  title: "Preço Justo",
                  desc: "O melhor custo-benefício de Piracicaba e região.",
                },
              ].map((item, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 4,
                      textAlign: "center",
                      height: "100%",
                      borderRadius: 2,
                    }}
                  >
                    <StarIcon sx={{ fontSize: 50, color: "#f97316", mb: 2 }} />
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      gutterBottom
                      color="primary.main"
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* =================================================================================
          SEÇÃO 2: SOBRE
         ================================================================================= */}
        <Box id="sobre" sx={{ py: 10, bgcolor: "#f8fafc" }}>
          <Container>
            <Grid container spacing={6} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ borderLeft: "5px solid #f97316", pl: 3, mb: 3 }}>
                  <Typography
                    variant="h4"
                    component="h2"
                    fontWeight="bold"
                    color="text.primary"
                  >
                    Sobre a Vidraçaria
                  </Typography>
                </Box>
                <Typography paragraph fontSize="1.1rem" color="text.secondary">
                  Há anos no mercado de Piracicaba, a{" "}
                  <strong>Vidros e Box Dois Córregos</strong>, liderada por
                  Augusto Dondelli, se tornou referência em qualidade e
                  confiança.
                </Typography>
                <Typography paragraph fontSize="1.1rem" color="text.secondary">
                  Nossa missão é trazer modernidade e segurança para residências
                  e comércios, trabalhando com os melhores materiais do mercado.
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper
                  elevation={6}
                  sx={{
                    height: 400,
                    bgcolor: "#e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 4,
                  }}
                >
                  <Typography variant="h6" color="text.disabled">
                    Foto da Loja
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* =================================================================================
          SEÇÃO 3: SERVIÇOS
         ================================================================================= */}
        <Box id="servicos" sx={{ py: 10, bgcolor: "white" }}>
          <Container>
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
              {[
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
                  title: "Envidraçamento de Sacada",
                  img: "https://plus.unsplash.com/premium_photo-1680100256127-e73d3f1f3376?auto=format&fit=crop&w=600",
                  desc: "Proteção contra chuva e vento sem perder a vista.",
                },
                {
                  title: "Janelas e Portas",
                  img: "https://images.unsplash.com/photo-1502005229762-cf1e2a862d43?auto=format&fit=crop&w=600",
                  desc: "Fechamentos em vidro temperado sob medida.",
                },
                {
                  title: "Prateleiras",
                  img: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=600",
                  desc: "Organização e leveza para quartos e salas.",
                },
              ].map((item, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
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
                        href="#orcamento"
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
        </Box>

        {/* =================================================================================
          SEÇÃO 4: NOSSOS TRABALHOS
         ================================================================================= */}
        <Box id="trabalhos" sx={{ py: 10, bgcolor: "#f8fafc" }}>
          <Container>
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
              {[1, 2, 3, 4, 5, 6].map((item) => (
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
                      <Typography color="text.secondary" fontWeight="bold">
                        Foto Trabalho {item}
                      </Typography>
                    </Box>
                  </CardActionArea>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* =================================================================================
          SEÇÃO 5: ORÇAMENTO
         ================================================================================= */}
        <Box id="orcamento" sx={{ py: 10, bgcolor: "white" }}>
          <Container maxWidth="md">
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
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label="Seu Nome"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label="Telefone / WhatsApp"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                </Grid>

                <TextField
                  select
                  label="Tipo de Serviço"
                  defaultValue=""
                  fullWidth
                >
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
        </Box>

        {/* =================================================================================
          SEÇÃO 6: LOCALIZAÇÃO
         ================================================================================= */}
        <Box id="localizacao" sx={{ py: 10, bgcolor: "#f8fafc" }}>
          <Container>
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
              <Grid size={{ xs: 12, md: 5 }}>
                <Paper
                  elevation={2}
                  sx={{ p: 4, height: "100%", borderRadius: 2 }}
                >
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
                          <Typography fontWeight="bold">
                            08:00 - 18:00
                          </Typography>
                        </ListItem>
                        <ListItem
                          disableGutters
                          sx={{ borderBottom: "1px solid #eee" }}
                        >
                          <ListItemText primary="Sábado" />
                          <Typography fontWeight="bold">
                            08:00 - 12:00
                          </Typography>
                        </ListItem>
                      </List>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <Paper
                  elevation={2}
                  sx={{ height: 400, borderRadius: 2, overflow: "hidden" }}
                >
                  <iframe
                    src="https://maps.google.com/maps?q=Av.+Manoel+Concei%C3%A7%C3%A3o,+573+-+Vila+Rezende,+Piracicaba+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
        </Box>

        {/* =================================================================================
          SEÇÃO 7: CONTATO (Rodapé)
         ================================================================================= */}
        <Box id="contato" sx={{ py: 10, bgcolor: "#1e293b", color: "white" }}>
          <Container maxWidth="lg">
            <Box textAlign="center" mb={8}>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Fale Conosco
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.8 }}>
                Escolha a melhor forma de atendimento para você
              </Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center">
              {/* Card WhatsApp */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Paper
                  component="a"
                  href="https://wa.me/5519988515172"
                  target="_blank"
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    display: "block",
                    textDecoration: "none",
                    borderRadius: 4,
                    bgcolor: "rgba(255,255,255,0.1)", // Fundo translúcido
                    color: "white",
                    transition: "0.3s",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  <WhatsAppIcon
                    sx={{ fontSize: 50, color: "#22c55e", mb: 2 }}
                  />
                  <Typography variant="h6" fontWeight="bold">
                    WhatsApp
                  </Typography>
                  <Typography variant="body1">(19) 98851-5172</Typography>
                </Paper>
              </Grid>

              {/* Card Telefone */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 4,
                    bgcolor: "rgba(255,255,255,0.1)",
                    color: "white",
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 50, color: "white", mb: 2 }} />
                  <Typography variant="h6" fontWeight="bold">
                    Telefone Fixo
                  </Typography>
                  <Typography variant="body1">(19) 3426-5172</Typography>
                </Paper>
              </Grid>

              {/* Card Email */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Paper
                  component="a"
                  href="mailto:contato@vidrosdoiscorregos.com.br"
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    display: "block",
                    textDecoration: "none",
                    borderRadius: 4,
                    bgcolor: "rgba(255,255,255,0.1)",
                    color: "white",
                    transition: "0.3s",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  <EmailIcon sx={{ fontSize: 50, color: "#f97316", mb: 2 }} />
                  <Typography variant="h6" fontWeight="bold">
                    E-mail
                  </Typography>
                  <Typography variant="body2" sx={{ wordBreak: "break-all" }}>
                    contato@vidrosdoiscorregos.com.br
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Typography
              textAlign="center"
              sx={{ mt: 8, opacity: 0.5, fontSize: "0.9rem" }}
            >
              © {new Date().getFullYear()} Vidros e Box Dois Córregos. Todos os
              direitos reservados.
            </Typography>
          </Container>
        </Box>
      </main>
    </>
  );
}

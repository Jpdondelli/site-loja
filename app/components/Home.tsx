import Link from "next/link";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative h-[600px] flex items-center justify-center bg-slate-900 text-white">
        {/* Imagem de Fundo Escurecida */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-40" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Vidros e Box <span className="text-orange-500">Dois Córregos</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Transforme seu ambiente com elegância e segurança. Especialistas em
            vidros temperados, box, espelhos e muito mais.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              component={Link}
              href="/orcamento"
              variant="contained"
              size="large"
              color="warning" // Laranja do MUI
              endIcon={<ArrowForwardIcon />}
              sx={{ fontWeight: "bold" }}
            >
              Solicitar Orçamento
            </Button>
            <Button
              component={Link}
              href="/trabalhos"
              variant="outlined"
              size="large"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": { borderColor: "orange", color: "orange" },
              }}
            >
              Ver Nossos Trabalhos
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DIFERENCIAIS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Qualidade Premium",
              desc: "Vidros temperados de alta resistência e acabamento impecável.",
            },
            {
              title: "Instalação Rápida",
              desc: "Equipe especializada para uma entrega pontual e limpa.",
            },
            {
              title: "Preço Justo",
              desc: "O melhor custo-benefício de Piracicaba e região.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <StarIcon sx={{ fontSize: 40, color: "#f97316", mb: 2 }} />{" "}
              {/* Laranja */}
              <h3 className="text-xl font-bold mb-2 text-slate-800">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

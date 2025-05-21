// Logo temporariamente comentada para evitar erro de build
// <Image
//   src="/images/hellish-monday-logo.png"
//   alt="Hellish Monday Logo"
//   width={360}
//   height={180}
//   className="mb-4"
//   priority
// />

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Sparkles, DollarSign, Meh } from "lucide-react";

function BrandTitle() {
  return (
    <div className="flex flex-col items-center">
      {/* LOGO DESATIVADA TEMPORARIAMENTE */}
      <h1 className="text-6xl font-extrabold tracking-widest">HELLISH MONDAY™</h1>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="text-center py-16 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        A startup mais incorretamente certa do século
      </h2>
      <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
        Uma marca feita pra quem cansou de ser otimista. Roupas, produtos e
        assinaturas criadas no fundo do poço — e com frete.
      </p>
      <div className="mt-8">
        <button className="bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-2xl text-white text-lg border border-zinc-600">
          Comprar a Desgraça™
        </button>
      </div>
    </section>
  );
}

export default function HellishMondayPitch() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 to-zinc-900 text-white p-6 flex flex-col gap-12 font-mono">
      <header className="text-center border-b border-zinc-800 pb-6">
        <BrandTitle />
        <p className="text-zinc-500 mt-4 text-xl italic">
          Consultoria de Guerra Psicológica Aplicada ao Consumo Emocional.
        </p>
        <p className="text-sm mt-2 text-zinc-600">
          Apresentado por: <span className="text-white font-bold">Vultures & Trauma Capital</span>
        </p>
      </header>

      <HeroSection />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-zinc-900 border border-zinc-800 shadow-md transition-all hover:scale-[1.01] hover:border-red-500">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2 text-red-400">
              <Flame /> O Problema
            </h2>
            <p className="text-zinc-400">
              O mundo está saturado de positividade tóxica, produtividade simulada e autoconhecimento de Instagram. As pessoas querem rir do colapso... mas com estilo e entrega rápida.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border border-zinc-800 shadow-md transition-all hover:scale-[1.01] hover:border-yellow-400">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2 text-yellow-400">
              <Sparkles /> A Solução
            </h2>
            <p className="text-zinc-400">
              HELLISH MONDAY™ converte desespero moderno em produtos físicos e digitais. Roupas, cursos, assinaturas, tudo temperado com sarcasmo clínico e design que julga o cliente.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-zinc-800 border border-zinc-700 hover:border-pink-500 hover:scale-[1.02] transition-all">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">Planner do Caos™</h3>
            <p className="text-zinc-400 text-sm">
              Edição limitada com frases inéditas em cada página, escritas para julgar silenciosamente suas falhas. Páginas que não te ajudam. Elas só observam. Como sua ex.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-800 border border-zinc-700 hover:border-cyan-500 hover:scale-[1.02] transition-all">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">Camiseta "CEO de Nada"™</h3>
            <p className="text-zinc-400 text-sm">
              Farda oficial da autossabotagem profissional. Tecido 100% algodão, 0% esperança. Estampa minimalista com frases que não motivam, só constatam.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-800 border border-zinc-700 hover:border-purple-500 hover:scale-[1.02] transition-all">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">Caixa da Angústia™</h3>
            <p className="text-zinc-400 text-sm">
              Assinatura mensal: brindes inúteis + bilhetes passivo-agressivos + um adesivo que diz "não fale comigo". Cada edição vem com um item surpresa desconfortável — tipo um botão que não faz nada.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-zinc-900 border border-zinc-800 shadow-md hover:border-green-500 hover:scale-[1.01] transition-all">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2 text-green-500">
              <DollarSign /> Modelo de Negócio
            </h2>
            <p className="text-zinc-400">
              E-commerce sarcástico, clube de assinatura de angústia curada, colaborações com influenciadores fracassados e conteúdo de autoironia premium. Lucro na frustração. Escalabilidade do desespero.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border border-zinc-800 shadow-md hover:border-purple-400 hover:scale-[1.01] transition-all">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2 text-purple-500">
              <Meh /> Por Que Vai Dar Certo
            </h2>
            <p className="text-zinc-400">
              Porque o mundo já está errado. A Hellish Monday™ apenas empacota o colapso com fonte serifada e código de desconto. Clientes amam se odiar. 83% das pessoas entre 25 e 45 anos se identificam com o sentimento de fracasso produtivo e 9 em cada 10 consumidores comprariam algo que representa sua frustração cotidiana. Estamos aqui para vender exatamente isso — com humor, estética e boleto.
            </p>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-12 text-center text-zinc-600 text-xs">
        <p>
          © 2025 Hellish Monday Inc. Patrocinado por Vultures & Trauma Capital – Investindo no fracasso com convicção e capital de risco.
        </p>
      </footer>
    </div>
  );
}

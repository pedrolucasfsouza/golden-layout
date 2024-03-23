import Analytics from "@/components/Analytics";
import { Head, Html, Main, NextScript } from "next/document";
import PixelFb from "./pixel-fb";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <title>BOLETAAI - A Central de Inteligencia do Investidor</title>
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <Head />
      <body>
        <Main />
        <NextScript />
        <PixelFb />
        <Analytics />
      </body>
    </Html>
  );
}

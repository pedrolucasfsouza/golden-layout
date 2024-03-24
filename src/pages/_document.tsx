import Analytics from "@/components/Analytics";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <title>BOLETAAI - A Central de Inteligencia do Investidor</title>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      <Head> 
      <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=2134368583563440&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head>
      <body>
        <Main />
          <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}

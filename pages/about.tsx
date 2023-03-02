import { Header } from "@/components/header";
import { StyledText } from "@/components/pages/about/styledText";
import { StyledPage } from "@/styles/styledPage";
import Head from "next/head";

const About = () => {
  return (
    <StyledPage>
      <Head>
        <title>Rafael</title>
      </Head>

      <Header />

      <StyledText>
        <h1>Olá</h1>
        <h2>Eu sou o Rafael, tenho 23 anos.</h2>
        <p>
          Sempre gostei de estar em frente a um computador, diria até que este é o meu "Habitat
          natural", sempre quebrando e consertando coisas por conta propria.
        </p>
        <p>
          Trabalhei com fotográfia e design por 2 anos, e agora estou estudanto programação. Estou a
          1 anos aprendendo a programar e criando projetos. Quero criar algo util ajudar pessoas a
          estudar, anotar, serem mais organizadas e produtivas.
        </p>
      </StyledText>
    </StyledPage>
  );
};

export default About;

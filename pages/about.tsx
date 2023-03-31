import { Header } from '@/components/common/header';
import { StyledText } from '@/components/pages/about/styledText';
import { StyledPage } from '@/styles/styledPage';
import Head from 'next/head';

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
          Sempre gostei de estar em frente a um computador, diria até que este é o meu &quot;Habitat
          natural&quot;, sempre quebrando e consertando coisas por conta propria.
        </p>

        <p>
          Trabalhei com fotográfia e design por 2 anos, e agora estou estudando programação. Estou a
          1 ano aprendendo a programar e criando projetos.
        </p>

        <p>
          Com o objetivo de aprender a lidar com projetos maiores e mais complexos, estou atualmente
          focando em criar projetos mais complexos, pensando sempre em formas melhores de lidar com,
          estrutura de pastas, testes, padrões de projeto, repetição de código, código limpo, dados
          e estado. Criar e lidar com esses projetos estão me tornando um programador melhor.
        </p>
      </StyledText>
    </StyledPage>
  );
};

export default About;

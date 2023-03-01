import { StyledPage } from "@/styles/styledPage";
import { Header } from "@/components/header";
import { Main } from "@/components/pages/index/main";
import Head from "next/head";

const Index = () => {
  return (
    <StyledPage>
      <Head>
        <title>Rafael</title>
      </Head>

      <Header />
      <Main />
    </StyledPage>
  );
};

export default Index;

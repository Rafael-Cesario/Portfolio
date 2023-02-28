import { StyledIndex } from "@/styles/styledIndex";
import { CustomHead } from "@/components/customHead";
import { Header } from "@/components/pages/header";
import { Main } from "@/components/pages/main";

const Index = () => {
  return (
    <StyledIndex>
      <CustomHead />
      <Header />
      <Main />
    </StyledIndex>
  );
};

export default Index;

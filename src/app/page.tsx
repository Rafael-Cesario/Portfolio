import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Introduction } from "@/components/introduction";
import { MainStack } from "@/components/main-stack";
import { ProjectsAbout } from "@/components/projects-about";
import { ProjectContainer } from "@/components/projects-container";

const Home = () => {
	return (
		<>
			<Header />
			<Introduction />
			<ProjectsAbout />
			<ProjectContainer />
			<MainStack />
			<About />
		</>
	);
};

export default Home;

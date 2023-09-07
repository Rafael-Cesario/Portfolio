import { Header } from "@/components/header";
import { Introduction } from "@/components/introduction";
import { ProjectsAbout } from "@/components/projects-about";
import { ProjectContainer } from "@/components/projects-container";

const Home = () => {
	return (
		<>
			<Header />
			<Introduction />
			<ProjectsAbout />
			<ProjectContainer />
		</>
	);
};

export default Home;

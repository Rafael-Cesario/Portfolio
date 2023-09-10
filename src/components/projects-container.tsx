import { StyledProjectsContainer } from "@/styles/styled-projects-container";
import { projects } from "@/lib/projects-data";
import { BsFillStarFill } from "react-icons/bs";
import Link from "next/link";

export const ProjectContainer = () => {
	return (
		<StyledProjectsContainer>
			{projects.map(({ name, description, stack, github, tag, favorite }) => (
				<div className="project" key={name}>
					<div className="head">
						<h1 className="name">{name}</h1>
						<div className="side">
							<Link href={github} target="_blank">
								Github
							</Link>
							<span className="tag">{tag}</span>
						</div>
					</div>

					<p className="description">{description}</p>
					<p className="stack">{stack}</p>

					{favorite && <BsFillStarFill className="icon" />}
				</div>
			))}

			<Link href="https://github.com/Rafael-Cesario" target="_blank" className="link">
				Você pode encontrar mais projetos no meu github, só clicar aqui e eu te levo para lá.
			</Link>
		</StyledProjectsContainer>
	);
};

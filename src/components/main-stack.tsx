import { StyledMainStack } from "@/styles/styled-main-stack";

export const MainStack = () => {
	return (
		<StyledMainStack>
			<h1 className="title">Minhas principais tecnologias são</h1>

			<div className="container">
				<span className="tech">Typescript</span>
				<span className="tech">Git</span>
				<span className="tech">React</span>
				<span className="tech">NextJS</span>
				<span className="tech">Redux</span>
				<span className="tech">Styled-Components</span>
				<span className="tech">MongoDB</span>
				<span className="tech">PostgreSQL</span>
				<span className="tech">GraphQl</span>
				<span className="tech">Node</span>
				<span className="tech">Jest</span>
				<span className="tech">Cypress</span>
				<span className="tech">Prisma</span>
				<span className="tech">NestJS</span>
			</div>
		</StyledMainStack>
	);
};

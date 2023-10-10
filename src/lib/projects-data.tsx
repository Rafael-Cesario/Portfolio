interface IProject {
	name: string;
	description: string;
	stack: string;
	github: string;
	tag: string;
	favorite: boolean;
}

export const projects: IProject[] = [
	{
		name: "WordList",
		description:
			"WordList é um site projetado para aprimorar o estudo de idiomas, utilizando cartões de estudo como ferramenta principal para uma revisão eficaz e consistente das palavras aprendidas.",
		stack: "Typescript, Nextjs, Graphql, styled-components, MongoDB, Vitest, Redux",
		github: "https://github.com/Rafael-Cesario/WordList",
		tag: "FullStack",
		favorite: true,
	},
	{
		name: "GameShelf",
		description:
			"GameShelf é uma estante virtual de jogos com banco de dados integrado. Os usuários podem organizar e gerenciar sua coleção com listas e filtros personalizáveis para uma experiência adaptada às preferências individuais.",
		stack: "Typescript, NextJS, Styled-Components, GraphQl, Vitest, JWT, mongoDB",
		github: "https://github.com/Rafael-Cesario/GameShelf",
		tag: "FullStack",
		favorite: true,
	},
	{
		name: "To do List",
		description: "Crie listas, tarefas e tags. Uma to do list, integrada com postgres e testes feitos com cypress",
		stack: "Next, Styled-components, redux, cypress, Nest, Postgres, Prisma, graphql, jwt, jest, supertest-graphql, docker",
		github: "https://github.com/Rafael-Cesario/To-do-list",
		tag: "FullStack",
		favorite: true,
	},
	{
		name: "NestJS Crud Postgres",
		description: "Simples CRUD de usuario feito com nestJS, postgres e prisma.",
		stack: "Typescript, NestJS, Prisma, PostgreSQL, Docker, Jest, JWT",
		github: "https://github.com/Rafael-Cesario/Projects/tree/main/Backend/05_nest_crud_postgres",
		tag: "Backend",
		favorite: false,
	},
];

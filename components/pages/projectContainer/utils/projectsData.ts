type project = {
	name: string;
	txt: string;
	stack: string;
	scope: string;
	github: string;
};

export const projectsData: project[] = [
	{
		name: 'GameShelf',
		txt: 'Save your games, add tags, genre, rate, images, and have a organized place to see your games.',
		stack: 'Nextjs, React, Styled-components, graphql, apollo-server, vitest, jwt, eslint, mongodb, typegoose, mongoose',
		scope: 'FullStack',
		github: 'https://github.com/Rafael-Cesario/GameShelf',
	},

	{
		name: 'To Do List FullStack',
		txt: 'Create lists, todos and tags to keep yourself organized while working or studying something.',
		stack: 'React, react-router, typescript, graphql, apollo, vite, vitest, jwt, mongodb, styled-components',
		scope: 'FullStack',
		github: 'https://github.com/Rafael-Cesario/To-Do-List-Full-Stack',
	},

	{
		name: 'WordList',
		txt: 'WordList é um site feito para te ajudar a aprender um idioma, mais precisamente para te ajudar a memorizar algumas palavras.',
		stack: 'Nextjs, styled-components, graphql, mongodb, vitest, typescript',
		scope: 'FullStack',
		github: 'http://github.com/rafael-cesario/wordlist',
	},

	{
		name: 'Algorithms',
		txt: 'Uma coleção de algoritmos.',
		stack: 'Javascript',
		scope: '',
		github: 'https://github.com/Rafael-Cesario/Algorithms',
	},

	{
		name: 'Portfólio',
		txt: 'Meu site pessoal para salvar meus projetos.',
		stack: 'nextjs, styled-components, vitest, typescript',
		scope: 'Frontend',
		github: 'http://github.com/rafael-cesario/portfolio',
	},

	{
		name: 'Login',
		txt: 'Uma pagina para fazer login ou criar uma conta.',
		stack: 'nextjs, graphql, tailwindcss, typescript, mongodb, JWT',
		scope: 'FullStack',
		github: 'https://github.com/Rafael-Cesario/Projects/tree/main/08-login',
	},

	{
		name: 'User Crud - Graphql',
		txt: 'Um simples crud de usuário utilizando graphql.',
		stack: 'graphql, mongodb, typescript, vitest',
		scope: 'backend',
		github: 'https://github.com/Rafael-Cesario/Projects/tree/main/05-user-crud-graphql',
	},

	{
		name: 'Projects',
		txt: 'Alguns pequenos projetos focados em algo especifico.',
		stack: '',
		scope: 'FullStack',
		github: 'https://github.com/Rafael-Cesario/Projects',
	},
];

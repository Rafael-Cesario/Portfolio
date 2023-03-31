type project = {
	name: string;
	txt: string;
	stack: string;
	scope: string;
	github: string;
	url: string;
};

export const projectsData: project[] = [
	{
		name: 'To Do List FullStack',
		url: 'todolist',
		txt: 'Create lists, todos and tags to keep yourself organized while working or studying something.',
		stack: 'React, react-router, typescript, graphql, apollo, vite, vitest, jwt, mongodb, styled-components',
		scope: 'FullStack',
		github: 'https://github.com/Rafael-Cesario/To-Do-List-Full-Stack',
	},

	{
		name: 'WordList',
		url: 'wordlist',
		txt: 'WordList é um site feito para te ajudar a aprender um idioma, mais precisamente para te ajudar a memorizar algumas palavras.',
		stack: 'nextjs, styled-components, graphql, mongodb, vitest, typescript',
		scope: 'FullStack',
		github: 'http://github.com/rafael-cesario/wordlist',
	},

	{
		name: 'Algorithms',
		url: '/',
		txt: 'Uma coleção de algoritmos.',
		stack: 'Javascript',
		scope: '',
		github: 'https://github.com/Rafael-Cesario/Algorithms',
	},

	{
		name: 'Portfólio',
		url: '/',
		txt: 'Meu site pessoal para salvar meus projetos.',
		stack: 'nextjs, styled-components, vitest, typescript',
		scope: 'Frontend',
		github: 'http://github.com/rafael-cesario/portfolio',
	},

	{
		name: 'Login',
		url: '/',
		txt: 'Uma pagina para fazer login ou criar uma conta.',
		stack: 'nextjs, graphql, tailwindcss, typescript, mongodb, JWT',
		scope: 'FullStack',
		github: 'https://github.com/Rafael-Cesario/Projects/tree/main/08-login',
	},

	{
		name: 'User Crud - Graphql',
		url: '/',
		txt: 'Um simples crud de usuario utilizando graphql.',
		stack: 'graphql, mongodb, typescript, vitest',
		scope: 'backend',
		github: 'https://github.com/Rafael-Cesario/Projects/tree/main/05-user-crud-graphql',
	},

	{
		name: 'Projects',
		url: '/',
		txt: 'Alguns pequenos projetos focados em algo especifico.',
		stack: '',
		scope: 'FullStack',
		github: 'https://github.com/Rafael-Cesario/Projects',
	},
];

import { StyledTodolist } from '@/styles/projects/styledTodolist';
import Head from 'next/head';
import Image from 'next/image';

const Todolist = () => {
	return (
		<StyledTodolist>
			<Head>
				<title>Rafael</title>
			</Head>

			<div className="title">
				<h1>Todolist</h1>
				<p>Create lists, todos and tags to keep yourself organized while working or studying something.</p>
			</div>

			<div className="features">
				<h1>Features</h1>

				<ul>
					<li>Create lists, todos, tags and notes.</li>
					<li>Dark and white Theme.</li>
				</ul>
			</div>

			<div className="stack">
				<h1>Stack</h1>

				<h2>FrontEnd</h2>
				<p>apollo-client, styled-components, graphql, react, react-router, typescript, eslint, vite, vitest.</p>

				<h2>BackEnd</h2>
				<p>bcrypt, jsonwebtoken, eslint, graphql, prettier, supertest-graphql, typescript, vitest, apollo-server, typegoose, mongoose.</p>
			</div>

			<div className="roadmap">
				<h1>Roadmap</h1>

				<div className="frontend">
					<h2>FrontEnd</h2>
					<ul>
						<li>&#x2705; Login and createAccount.</li>
						<li>&#x2705; Notification component, hook useNotification.</li>
						<li>&#x2705; Form show errors and invalid fields.</li>
						<li>&#x2705; Pages: Authentication, lists, todos.</li>
						<li>&#x2705; Graphql Queries and cache update.</li>
						<li>&#x2705; Redux slices: lists, todos, notification, filter, theme.</li>
						<li>&#x2705; Dark and white theme with styled-components and local Storage.</li>
						<li>&#x2705; Filter: lists, todos, tags, status.</li>
						<li>&#x274c; Tests.</li>
					</ul>
				</div>

				<div className="backend">
					<h2>BackEnd</h2>
					<ul>
						<li>&#x2705; TypeDefs and Resolvers: User, lists, todos.</li>
						<li>&#x2705; Services: User, lists, todos</li>
						<li>&#x2705; Password with Bcrypt and authentication with JWT.</li>
						<li>&#x2705; Tests.</li>
					</ul>
				</div>
			</div>

			<div className="screenshots">
				<h1>Screenshots</h1>

				<div className="imgs">
					<Image width={1920} height={1080} src="/projects/todolist/Captura de tela 2023-03-30 045042.png" alt="project image" />
					<Image width={1920} height={1080} src="/projects/todolist/Captura de tela 2023-03-30 045359.png" alt="project image" />
					<Image width={1920} height={1080} src="/projects/todolist/Captura de tela 2023-03-30 045528.png" alt="project image" />
					<Image width={1920} height={1080} src="/projects/todolist/Captura de tela 2023-03-30 045557.png" alt="project image" />
					<Image width={1920} height={1080} src="/projects/todolist/Captura de tela 2023-03-30 045625.png" alt="project image" />
					<Image width={1920} height={1080} src="/projects/todolist/Captura de tela 2023-03-30 045804.png" alt="project image" />
					<Image width={1920} height={1080} src="/projects/todolist/Captura de tela 2023-03-30 045823.png" alt="project image" />
					<Image width={1920} height={1080} src="/projects/todolist/Captura de tela 2023-03-30 050131.png" alt="project image" />
					<Image width={1920} height={1080} src="/projects/todolist/Captura de tela 2023-03-30 052401.png" alt="project image" />
				</div>

				<div className="buttons">
					<button>{'<'}</button>
					<button>{'>'}</button>
				</div>
			</div>
		</StyledTodolist>
	);
};

export default Todolist;

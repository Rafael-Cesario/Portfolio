import Link from 'next/link';
import { StyledProject } from './styles/styledProject';
import { projectsData } from './utils/projectsData';
import { useRouter } from 'next/router';

interface ProjectContainerProps {
	props: {
		scopeFilter: string;
	};
}

export const ProjectContainer = ({ props: { scopeFilter } }: ProjectContainerProps) => {
	const router = useRouter();

	const filterProjects = (scopeFilter: string) => {
		if (!scopeFilter) return projectsData;

		const projectsFiltered = projectsData.filter(({ scope }) => {
			return scope.toLowerCase() === scopeFilter.toLowerCase();
		});

		return projectsFiltered;
	};

	const projects = filterProjects(scopeFilter);

	return (
		<>
			{projects.map(({ name, url, txt, stack, scope, github }) => {
				return (
					<StyledProject key={name}>
						<h1 className="title" onClick={() => router.push(`/projects/${url}`)}>
							{name}
						</h1>

						<Link href={github} target={'_blank'}>
							Github
						</Link>

						<p className="txt">{txt}</p>
						<p className="stack">{stack}</p>
						<p className="scope">{scope}</p>
					</StyledProject>
				);
			})}
		</>
	);
};

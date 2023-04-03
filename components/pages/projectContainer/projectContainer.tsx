import Link from 'next/link';
import { StyledProject } from './styles/styledProject';
import { StyledProjectContainer } from './styles/styledProjectContainer';
import { projectsData } from './utils/projectsData';

interface ProjectContainerProps {
	props: {
		scopeFilter: string;
	};
}

export const ProjectContainer = ({ props: { scopeFilter } }: ProjectContainerProps) => {
	const filterProjects = (scopeFilter: string) => {
		if (!scopeFilter) return projectsData;

		const projectsFiltered = projectsData.filter(({ scope }) => {
			return scope.toLowerCase() === scopeFilter.toLowerCase();
		});

		return projectsFiltered;
	};

	const projects = filterProjects(scopeFilter);

	return (
		<StyledProjectContainer>
			{projects.map(({ name, txt, stack, scope, github }) => {
				return (
					<StyledProject key={name}>
						<Link target={'_blank'} href={github} className="title">
							{name}
						</Link>

						<Link href={github} target={'_blank'}>
							Github
						</Link>

						<p className="txt">{txt}</p>
						<p className="stack">{stack}</p>
						<p className="scope">{scope}</p>
					</StyledProject>
				);
			})}
		</StyledProjectContainer>
	);
};

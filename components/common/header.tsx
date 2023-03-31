import Link from 'next/link';
import { StyledHeader } from './styles/styledHeader';

export const Header = () => {
	return (
		<StyledHeader>
			<Link href={'/'}>Inicio</Link>

			<Link href={'/projects'}>Projetos</Link>
			<Link href={'/about'}>Sobre mim</Link>
		</StyledHeader>
	);
};

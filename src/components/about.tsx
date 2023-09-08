import Image from "next/image";
import Link from "next/link";
import { StyledAbout } from "@/styles/styled-about";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export const About = () => {
	return (
		<StyledAbout id="about">
			<div className="profile">
				<Image className="picture" src="/images/rafael02.jpg" width={2160} height={2700} alt="my profile picture" />

				<div className="name-role">
					<h1>Rafael Cesário</h1>
					<p>Desenvolvedor web FullStack</p>
				</div>

				<div className="links">
					<Link href={"https://github.com/Rafael-Cesario"} target="_blank">
						<BsGithub className="icon" />
						<span className="alt">Github</span>
					</Link>

					<Link href={"https://www.linkedin.com/in/rafael-cesario/"} target="_blank">
						<BsLinkedin className="icon" />
						<span className="alt">Linkedin</span>
					</Link>

					<Link href="mailto:rafaeloliveiracds@gmail.com">
						<SiGmail className="icon" />
						<span className="alt">Rafaeloliveiracds@gmail.com</span>
					</Link>
				</div>
			</div>

			<div className="about">
				<h1 className="title">Sobre</h1>

				<p className="text">
					Iniciei minha carreira profissional como designer gráfico em 2018 com 18 anos, trabalhando com design e fotografia em uma empresa de formaturas e eventos por 1 ano e 5 meses.
				</p>

				<p className="text">Inúmeros fotógrafos por falta de tempo e alta demanda, para não deixarem de fotografar eventos, recorriam a editores como eu para a edição de suas fotos.</p>

				<p className="text">
					Tendo meu trabalho principal, fotos para editar e o objetivo de entrar em uma faculdade, decidi que eu poderia deixar meu trabalho e focar apenas na faculdade enquanto continuo editando
					fotos.
				</p>

				<p className="text">Como um bom curioso comecei a olhar e estudar aos poucos o que seria a grade curricular de uma faculdade de ciência da computação. </p>

				<p className="text">
					Sempre gostei e percebi uma facilidade maior de estudar quando sozinho, decidi experimentar por 1 ano o quão longe eu poderia chegar e se esse seria um bom caminho a se seguir.
				</p>

				<p className="text">
					Tendo gostado tanto dessa forma de estudo e vendo minha evolução, decidi continuar estudando por conta própria e no fim do meu segundo ano de estudos, começar a procurar por empresas que se
					alinhem com meus estudos e objetivos, como forma de contribuir e continuar crescendo.
				</p>

				<p className="text">
					Atualmente tenho 23 anos, trabalhei com fotografia e design por 3 anos, estou há 2 anos estudando desenvolvimento web, e em busca da minha primeira oportunidade para aplicar minhas
					habilidades, contribuir em projetos e continuar crescendo.
				</p>
			</div>
		</StyledAbout>
	);
};

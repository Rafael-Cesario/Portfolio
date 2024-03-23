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
					Iniciei minha carreira profissional como designer gráfico em 2018 com 18 anos, 
					trabalhando com design e fotografia em uma empresa de formaturas e eventos por mais de 2 anos.
				</p>

				<p className="text">
					Atualmente tenho 24 anos, trabalhei com fotografia e design por 3 anos.
					Em 2021 dei inicio a meus estudos em desenvolvimento web enquanto trabalhava em outras áreas.
				</p>
				
				<p className="text">
					Como autodidata, constantemente tenho aprimorado minha capacidade de lidar com problemas, planejar,
					pesquisar, descobrir, adaptar, e continuar melhorando.
				</p>

				<p className="text">
					Iniciei meus estudos com lógica de programação, estrutura de dados e algoritmos, banco de dados, SQL,
					programação orientada a objetos, e desenvolvimento web que tenho dado total foco até o momento.
				</p>

				<p className="text">
					Me familiarizei com metodologias ágeis, Scrum, Kanban, Extreme programming.
				</p>
			</div>
		</StyledAbout>
	);
};

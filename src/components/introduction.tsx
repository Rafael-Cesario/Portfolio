import { StyledIntroduction } from "@/styles/styled-introduction";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

export const Introduction = () => {
	return (
		<StyledIntroduction>
			<Image className="picture" src="/images/rafael01.jpg" width={2160} height={2700} alt="my profile picture" />

			<div className="info">
				<h1 className="title">
					Olá, eu sou o <span className="highlight">Rafael Cesário</span> <br /> um desenvolvedor FullStack
				</h1>

				<p className="text">
					Estou há 2 anos criando e compartilhando projetos, conduzindo-os do zero até a fase de deploy, abrangendo tanto o frontend quanto o backend, aprimorando minhas habilidades em
					<span className="highlight"> typescript, react, node, graphQl, banco de dados, e APIs</span>, dando atenção a um código limpo, testado, de fácil manutenção e escalável.
				</p>

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
		</StyledIntroduction>
	);
};

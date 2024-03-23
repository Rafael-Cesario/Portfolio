import { StyledIntroduction } from "@/styles/styled-introduction";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

export const Introduction = () => {
	return (
		<StyledIntroduction id="home">
			<div className="info">
				<h1 className="title">
					Olá, eu sou o <span className="highlight">Rafael Cesário</span> <br /> um Desenvolvedor FullStack
				</h1>

				<p className="text">
					Há mais de 2 anos criando projetos do zero, dando atenção a um código limpo, testado, de fácil manutenção e
					escalável.
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

import Link from "next/link";
import { StyledBestProject } from "./styles/bestProjectStyle";
import Image from "next/image";
import { useState } from "react";

export const BestProject = () => {
	const [carouselPosition, setCarouselPosition] = useState(0);

	const moveCarousel = (newPosition: number) => {
		console.log({ newPosition });
		if (newPosition > 0 || newPosition < -400) return;
		setCarouselPosition(newPosition);
	};

	return (
		<StyledBestProject carouselPosition={carouselPosition}>
			<h1 className="title">WordList</h1>

			<div className="sub">
				<p className="text">WordList é um site para te ajudar a memorizar novas palavras enquanto você estiver aprendendo um novo idioma.</p>
				<Link className="link" href={"https://github.com/Rafael-Cesario/WordList"} target={"_blank"}>
					Github
				</Link>
			</div>

			<div className="carousel">
				<button className="move-carousel" onClick={() => moveCarousel(carouselPosition + 100)}>
					{"<"}
				</button>

				<div className="image-container">
					<Image className="image" src={"/projects/Wordlist/Authentication.png"} width={1920} height={1280} alt="project design" />
					<Image className="image" src={"/projects/Wordlist/Home.png"} width={1920} height={1280} alt="project design" />
					<Image className="image" src={"/projects/Wordlist/List.png"} width={1920} height={1280} alt="project design" />
					<Image className="image" src={"/projects/Wordlist/Configs.png"} width={1920} height={1280} alt="project design" />
					<Image className="image" src={"/projects/Wordlist/Question.png"} width={1920} height={1280} alt="project design" />
				</div>

				<button className="move-carousel" onClick={() => moveCarousel(carouselPosition - 100)}>
					{">"}
				</button>
			</div>

			<h2 className="sub-title">Stack</h2>

			<ul className="stack-list">
				<li className="list-item">Language: Typescript</li>
				<li className="list-item">Framework: Next 13</li>
				<li className="list-item">Styles: Styled-components</li>
				<li className="list-item">Database: MongoDB, mongoose, typegoose</li>
				<li className="list-item">Queries: GraphQl, Apollo</li>
				<li className="list-item">Global state: Redux</li>
				<li className="list-item">Authentication: JWT</li>
				<li className="list-item">Tests: Cypress, vitest, react-testing-library, supertest-graphql</li>
				<li className="list-item">Linting: Eslint</li>
			</ul>
		</StyledBestProject>
	);
};

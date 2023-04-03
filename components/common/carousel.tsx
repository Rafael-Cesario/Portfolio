import Image from 'next/image';
import { useRef, useState } from 'react';
import { StyledCarousel } from './styles/styledCarousel';

export const Carousel = ({ imgs }: { imgs: string[] }) => {
	const carouselElement = useRef(null);
	const [scrollCarousel, setScrollCarousel] = useState(0);

	const moveCarousel = (moveTo: string) => {
		const element = carouselElement.current! as HTMLDivElement;

		if (moveTo === 'right') {
			const newScroll = 100 + scrollCarousel ?? 0;
			const maxRange = (imgs.length - 1) * 100;

			if (newScroll > maxRange) return;

			element.style.transform = `translateX(-${newScroll}%)`;
			setScrollCarousel(newScroll);
		}

		if (moveTo === 'left') {
			const newScroll = (scrollCarousel ?? 0) - 100;

			if (newScroll < 0) return;

			element.style.transform = `translateX(-${newScroll}%)`;
			setScrollCarousel(newScroll);
		}
	};

	const showFullImage = () => {
		const element = carouselElement.current! as HTMLDivElement;
		const newMaxWidth = element.style.maxWidth === '80vw' ? '900px' : '80vw';
		const images = element.childNodes as NodeListOf<HTMLImageElement>;

		element.style.maxWidth = newMaxWidth;
		images.forEach((img) => (img.style.maxWidth = newMaxWidth));

		const screenshotsElement = element.parentNode!.parentNode! as HTMLDivElement;
		screenshotsElement.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<StyledCarousel>
			<div onClick={() => showFullImage()} className="imgs" ref={carouselElement}>
				{imgs.map((img) => (
					<Image key={img} width={1920} height={1080} src={`/projects/todolist/${img}.png`} alt="project image" />
				))}
			</div>

			<div className="buttons">
				<button onClick={() => moveCarousel('left')}>{'<'}</button>
				<button onClick={() => moveCarousel('right')}>{'>'}</button>
			</div>
		</StyledCarousel>
	);
};

import { palette } from "@/styles/palette";
import styled from "styled-components";

export const StyledBestProject = styled.div<{ carouselPosition: number }>`
	margin-bottom: 12rem;
	max-width: 1200px;

	.title {
		font-size: 2rem;
		font-weight: bold;
		margin: 1rem 4rem;
	}

	.sub {
		display: flex;
		justify-content: space-between;
		margin: 0 4rem;

		.text {
			color: #999;
			font-weight: bold;
			max-width: 500px;
		}

		.link {
			height: fit-content;
			text-decoration: none;
			color: #999;
			font-weight: bold;
			padding: 10px 20px;
			border-radius: 4px;
			background-color: #151515;

			:hover {
				background-color: ${palette.colors.bgBlue};
				color: #ddd;
			}
		}
	}

	.carousel {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 2rem 0;

		.move-carousel {
			border: 2px solid #202020;
			background-color: #151515;
			padding: 5px 10px;
			border-radius: 4px;
			color: #999;
			font-weight: bold;
			font-size: 1rem;
			cursor: pointer;

			:hover {
				background-color: ${palette.colors.bgBlue};
				color: #ddd;
			}
		}

		.image-container {
			overflow: hidden;
			display: flex;
			margin: 0 2rem;
			border: 4px solid #151515;
			border-radius: 4px;
			object-fit: cover;
			width: 100%;
			height: 100%;
		}

		.image {
			width: inherit;
			height: inherit;
			transition: 0.3s ease-out;
			transform: ${({ carouselPosition }) => `translateX(${carouselPosition}%)`};
		}
	}

	.sub-title {
		font-size: 1.5rem;
		font-weight: bold;
		margin: 1rem 4rem;
	}

	.stack-list {
		border-left: 10px solid ${palette.colors.bgBlue};
		margin: 0 4rem;
		padding: 1rem;
		background-color: #151515;
		border-radius: 4px;
		line-height: 150%;
		font-weight: bold;
		list-style: none;
	}
`;

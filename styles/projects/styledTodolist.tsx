import styled from 'styled-components';
import { palette } from '../palette';

export const StyledTodolist = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	.title,
	.features,
	.stack,
	.roadmap,
	.screenshots {
		background-color: #151515;
		border: 3px solid #181818;
		margin: 2rem 0;
		padding: 10px 20px;
		max-width: 1000px;
		width: 100%;
		position: relative;

		h1 {
			font-size: 1.1rem;
			font-weight: bold;
			margin: 1rem 0;
			border-bottom: 2px solid #202020;
			padding-bottom: 0.5rem;
		}

		h2 {
			font-size: 0.9rem;
			font-weight: bold;
			margin: 2rem 0 0.5rem 0;
		}

		ul {
			margin: 0 2rem;
			list-style-type: '- ';
			list-style-position: inside;
			line-height: 1.4rem;
		}

		p,
		li {
			color: #bbb;

			::first-letter {
				text-transform: capitalize;
			}
		}
	}

	.title {
		margin-top: 1rem;
		text-align: center;

		h1 {
			font-size: 1.5rem;
			border: none;
			margin: 0;
		}
	}

	.stack {
		text-transform: capitalize;
	}

	.screenshots {
		display: flex;
		flex-direction: column;
		align-items: center;

		h1 {
			align-self: flex-start;
			width: 100%;
		}

		.imgs {
			display: flex;
			width: 80vw;
			max-width: 1000px;
			overflow-x: scroll;

			::-webkit-scrollbar {
				background-color: #151515;
			}

			/* ::-webkit-scrollbar-thumb {
				background-color: #151515;
			} */

			img {
				max-width: 1000px;
				width: 80vw;
				height: auto;
				border: 10px solid #202020;
			}
		}

		.buttons {
			button {
				cursor: pointer;
				border: none;
				outline: none;
				padding: 10px 3rem;
				margin: 1rem;
				font-weight: bold;
				background-color: #202020;
				color: #ddd;
				transition: 0.2s;

				:hover {
					transform: scale(1.05);
				}

				:active {
					transform: scale(1);
				}
			}
		}
	}
`;

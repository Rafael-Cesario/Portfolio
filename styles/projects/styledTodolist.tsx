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
		/* background-color: #151515; */
		/* border: 3px solid #171717; */
		margin: 2rem 0;
		padding: 10px 20px;
		max-width: 1200px;
		width: 100%;
		position: relative;

		h1 {
			font-size: 1.1rem;
			font-weight: bold;
			margin: 1rem 0;
			color: #ddd;
		}

		h2 {
			font-size: 0.9rem;
			font-weight: bold;
			margin: 2rem 0 0.5rem 0;
			color: #aaa;
		}

		ul {
			margin: 1rem 2rem;
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
		margin: 5rem 0;

		h1 {
			font-size: 2rem;
			background-color: ${palette.colors.bgBlue};
			width: fit-content;
			padding: 5px 50px;
			border-radius: 1px;
			margin-bottom: 0.5rem;
		}
	}

	.features,
	.roadmap {
		background-color: #151515;
		border: 2px solid #181818;
	}

	.stack {
		text-transform: capitalize;

		p {
			background-color: #151515;
			padding: 10px 30px;
		}
	}

	.screenshots {
		display: flex;
		flex-direction: column;
		align-items: center;

		h1 {
			align-self: flex-start;
			width: 100%;
		}
	}
`;

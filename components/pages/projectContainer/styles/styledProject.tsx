import { palette } from '@/styles/palette';
import styled from 'styled-components';

export const StyledProject = styled.div`
	width: 100%;
	max-width: 800px;
	margin: 5rem 1rem;
	background-color: #151515;
	border-radius: ${palette.element.borderRadius};
	box-shadow: 10px 10px 5px #00000020;
	position: relative;
	padding: 2rem;

	animation: projects 0.3s ease-in both;

	@keyframes projects {
		0% {
			opacity: 0;
			transform: translate(5rem, 0);
		}

		50% {
			opacity: 1;
		}
	}

	.title {
		position: absolute;
		transform: translate(1rem, -1rem);
		padding: 0.5rem 2rem;
		font-size: 1.1rem;
		font-weight: bold;
		box-shadow: 10px 10px 2px #00000020;
		border-radius: ${palette.element.borderRadius};
		background-color: ${palette.colors.bgBlue};
		cursor: pointer;
		width: fit-content;
		color: #ddd;
		left: 0;

		:hover {
			background-color: #222;
		}
	}

	a {
		position: absolute;
		right: 0;
		top: 0;
		transform: translate(-1rem, -20px);
		text-decoration: none;
		color: #aaa;

		:hover {
			color: ${palette.colors.textBlue};
		}
	}

	.txt {
		margin: 1rem 0;
		color: #ddd;
	}

	.stack {
		margin: 1rem 0;
		color: #aaa;
		margin-bottom: 1rem;
		text-transform: capitalize;
	}

	.scope {
		margin: 1rem 0;
		color: ${palette.colors.textBlue};
	}
`;

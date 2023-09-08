"use client";
import styled from "styled-components";
import { Theme } from "./Theme";

export const StyledAbout = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin: 20rem 2rem;

	.profile {
		display: flex;
		flex-direction: column;
		align-items: center;

		.name-role h1 {
			font-size: 1.5rem;
			text-align: center;
		}

		.name-role p {
			font-size: 0.8rem;
			color: ${Theme.text + "80"};
		}

		.links {
			margin-top: 2rem;

			a {
				position: relative;
				color: ${Theme.text};
				margin-right: 1rem;
				font-size: 1rem;

				&:hover .alt {
					opacity: 1;
				}
			}

			.alt {
				position: absolute;
				pointer-events: none;
				left: 0;
				font-size: 1rem;
				transform: translate(-40%, 2.5rem);
				background-color: ${Theme.container};
				border-radius: ${Theme.borderRadius};
				padding: 5px 10px;
				opacity: 0;
			}
		}
	}

	.picture {
		width: 20vw;
		max-width: 300px;
		min-width: 200px;
		height: fit-content;
		margin: 2rem;
		box-shadow: -15px -15px 0 ${Theme.container};
		border-radius: ${Theme.borderRadius};
	}

	.about {
		max-width: 600px;
		margin: 2rem;

		.title {
			margin-bottom: 2rem;
			font-size: 3rem;
			color: #fff;
		}

		.text {
			margin-bottom: 2rem;
			position: relative;
		}
	}
`;

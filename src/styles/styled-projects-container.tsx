"use client";
import styled from "styled-components";
import { Theme } from "./Theme";

export const StyledProjectsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 8rem 2rem;

	.project {
		width: 100vw;
		max-width: 600px;
		margin: 2rem;
		padding: 2rem;
		background-color: ${Theme.container + "50"};
		border-radius: ${Theme.borderRadius};
		position: relative;

		.head {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
		}

		.name {
			margin-bottom: 1rem;
			color: ${Theme.textPrimary};
		}

		.side {
			display: flex;
			font-size: 0.8rem;
			color: ${Theme.text + "50"};

			.tag {
				margin-left: 1rem;
			}
		}

		.description {
			margin: 1rem 0;
			line-height: 25px;
		}

		.stack {
			font-size: 0.9rem;
			color: ${Theme.text + "80"};
		}

		.icon {
			margin-top: 1rem;
			color: gold;
			font-size: 0.8rem;
		}
	}

	.link,
	a {
		color: ${Theme.text + "50"};
		text-decoration: none;

		&:hover {
			color: ${Theme.textPrimary};
		}
	}

	.link {
		margin: 4rem;
		max-width: 400px;
		text-align: center;
	}
`;

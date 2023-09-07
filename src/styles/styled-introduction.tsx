"use client";
import styled from "styled-components";
import { Theme } from "./Theme";

export const StyledIntroduction = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin: 14rem 2rem;

	.highlight {
		color: ${Theme.textPrimary};
		text-transform: capitalize;
	}

	.info {
		max-width: 700px;
		margin: 1rem;
	}

	.text {
		border-top: 2px solid ${Theme.container};
		line-height: 25px;
		padding-top: 1rem;
	}

	.picture {
		height: auto;
		width: 300px;
		margin: 2rem;
		box-shadow: -15px -15px 0 ${Theme.container};
		border-radius: ${Theme.borderRadius};
	}

	.title {
		margin-bottom: 1rem;
	}

	.links {
		margin-top: 2rem;

		a {
			position: relative;
			color: ${Theme.text};
			margin-right: 1rem;
			font-size: 1.5rem;

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
`;

"use client";
import styled from "styled-components";
import { Theme } from "./Theme";

export const StyledMainStack = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 4rem;
	text-align: center;

	.container {
		margin: 2rem;
		display: flex;
		flex-wrap: wrap;
		max-width: 1000px;
		justify-content: center;
	}

	.tech {
		margin: 8px;
		padding: 5px 20px;
		color: white;
		border-radius: ${Theme.borderRadius};
		background-color: ${Theme.primary};
		font-weight: bold;
		flex-grow: 1;
	}
`;

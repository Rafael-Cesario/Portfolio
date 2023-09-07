"use client";
import styled from "styled-components";
import { Theme } from "./Theme";

export const StyledHeader = styled.header`
	display: flex;
	justify-content: center;
	margin: 1rem;

	button {
		border: 2px solid transparent;
		padding: 5px 10px;
		margin: 4px;
		font-weight: bold;
		background-color: transparent;
		color: ${Theme.text + "50"};
		cursor: pointer;

		&:hover {
			color: #fff;
			border-bottom: 2px solid ${Theme.textPrimary};
		}
	}
`;

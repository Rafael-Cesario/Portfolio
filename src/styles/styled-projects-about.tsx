"use client";
import styled from "styled-components";
import { Theme } from "./Theme";

export const StyledProjectsAbout = styled.div`
	margin-top: 12rem;
	background-color: ${Theme.container + "50"};
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;

	.container {
		max-width: 700px;
		padding: 4rem 2rem;

		.title {
			font-size: 3rem;
		}

		.text {
			margin: 1rem 0;
		}
	}
`;

"use client";
import * as styled from "styled-components";
import { Theme } from "./Theme";

export const StyledGlobal = styled.createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;

		::-webkit-scrollbar {
			background-color: ${Theme.container + "50"};
		}

		::-webkit-scrollbar-thumb {
			background-color: ${Theme.container};
		}
	}

	body {
		background-color: #111;
		color: #ddd;
	}
`;

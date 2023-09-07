"use client";
import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #111;
        color: #ddd
    }
`;

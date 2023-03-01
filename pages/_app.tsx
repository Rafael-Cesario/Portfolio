import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inconsolata', monospace;
    font-weight: normal;
  }
  
  body {
    margin: 1rem;
    background-color: #101010 ;
    color: #eee;

    ::-webkit-scrollbar {
      background-color: #101010;
    }

    ::-webkit-scrollbar-button{
      background-color: #202020;
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: #202020;
      border-radius: 2px;
    }
    
    ::-webkit-scrollbar-track {
      background-color: #151515;
    }
  }

`;

// interface ThemeInterface {
//   colors: {
//     primary: string;
//   };
// }

// const theme: ThemeInterface = {
//   colors: {
//     primary: "#0070f3",
//   },
// };

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

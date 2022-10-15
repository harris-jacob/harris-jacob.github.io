import { Theme } from "@emotion/react";

import "@emotion/react";
import { injectGlobal } from "@emotion/css";
declare module "@emotion/react" {
  export interface Theme {
    colors: {
      background: string;
    };
  }
}

export const baseTheme = {
  spacing: (n: number) => `${4 * n}px`,
};

export const darkTheme: Theme = {
  colors: {
    background: "#2D3142",
    neutral: "#FFFFFF",
  },
};

export const lightTheme: Theme = {
  colors: {
    background: "#FFFBFF",
    neutral: "#FFFFFF",
  },
};

export const injectGlobals = () => injectGlobal`
    body, html {
      margin: 0;
      font-family: 'Noto Sans HK', 'Helvetica', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 100;
    }

    body, #__next {
     height: 100vh;
    }

    ::-webkit-scrollbar {
      width: 5px;
      background: none;
    }
  
  ::-webkit-scrollbar-thumb {
      background: rgba(68, 68, 68, 0.52);
      border-radius: 5px;
    }
  `;

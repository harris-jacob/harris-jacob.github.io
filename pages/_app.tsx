import { css } from '@emotion/css';
import { Theme } from '@emotion/react';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Header } from '../components/Header';
import { darkTheme, lightTheme } from '../theme';

interface Props extends AppProps {
  theme: Theme
}

function MyApp({ Component, pageProps }: AppProps) {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => setIsLight(s => !s)

  return (
    <div>
    <Header toggleTheme={toggleTheme}/>
      <Component theme={isLight ? lightTheme : darkTheme} {...pageProps } />
    </div>
  )
}


const makeStyles = (theme: Theme) => css`
  background-color: ${theme.background}


`


export default MyApp

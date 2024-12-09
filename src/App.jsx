import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import Taskbar from './components/Taskbar';
import LoadingWindow from './components/LoadingWindow';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal;
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent(prevPercent => {
        if (prevPercent >= 100) {
          clearInterval(timer);
          setLoading(false);
          return 100;
        }
        return prevPercent + 10;
      });
    }, 300); // Adjust the interval as needed

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-ms_sans_serif min-h-screen flex flex-col">
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <Router>
          {loading ? (
            <LoadingWindow percent={percent} />
          ) : (
            <div className="flex-grow">
              <Menu />
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          )}
          <Taskbar />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { App } from 'components/App/App'; // именованній імпорт
import './index.css';
import {theme} from './constants/theme';

// потрібно обгорнути АПП в оцей провайдер теми
// необходимо передать один проп - theme, ето должен біть
// обьект, обьект сосвойствами теми


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

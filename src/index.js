import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react'; // 👈 import Analytics here
import store from './redux/store';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        {/* 👇 Analytics at the root so it tracks across the whole app */}
        <Analytics />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

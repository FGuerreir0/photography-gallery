import React from 'react';

import ReactDOM from 'react-dom/client';
import { WrappedApp } from './App';
import './index.css';
import Footer from './components/Footer/Footer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WrappedApp />
    <Footer />
  </React.StrictMode>,
);

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import './i18n';

const Root = () => {
  // Imposta l'attributo data-reduced-motion in base alle preferenze dell'utente
  useEffect(() => {
    // Controlla se l'utente preferisce ridurre le animazioni
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileMediaQuery = window.matchMedia('(max-width: 768px)');
    
    // Funzione per aggiornare l'attributo
    const updateReducedMotion = () => {
      const shouldReduceMotion = mediaQuery.matches || mobileMediaQuery.matches;
      document.documentElement.setAttribute(
        'data-reduced-motion',
        shouldReduceMotion ? 'true' : 'false'
      );
    };
    
    // Imposta il valore iniziale
    updateReducedMotion();
    
    // Aggiungi un listener per le modifiche alle preferenze
    mediaQuery.addEventListener('change', updateReducedMotion);
    mobileMediaQuery.addEventListener('change', updateReducedMotion);
    
    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', updateReducedMotion);
      mobileMediaQuery.removeEventListener('change', updateReducedMotion);
    };
  }, []);
  
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
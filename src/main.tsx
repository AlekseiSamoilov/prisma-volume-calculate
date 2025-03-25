import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { LanguageProvider } from './components/LanguageContext/LanguageContext'
import { CalculatorProvider } from './components/CalculatorContext/CalculatorContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <CalculatorProvider>
        <App />
      </CalculatorProvider>
    </LanguageProvider>
  </React.StrictMode>,
)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        // console.log('Service Worker registered: ', registration);
      })
      .catch(registrationError => {
        console.log('Service Worker registration failed: ', registrationError);
      });
  });
}

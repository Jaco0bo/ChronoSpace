import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/header.css'
import './styles/filters.css'
import './styles/contactInfo.css'
import App from './App.jsx'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

container.style.opacity = '1';
document.body.classList.remove('preload')

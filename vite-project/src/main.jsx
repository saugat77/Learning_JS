import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Counter from "./Counter.jsx";
import React from 'react'
import '../index.css';

const reactElement = React.createElement(
  'a',
  {href: 'https://youtube.com', target:'_blank'},
  'Click'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

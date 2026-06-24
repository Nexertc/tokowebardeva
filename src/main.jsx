import { createRoot } from 'react-dom/client'
import './index.css'
import "./App.css";
import App from './App'

// font-family
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Router from './components/router';
import ScrollToTop from './components/ScrolToTop';

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <ScrollToTop />
   <Router />
  </BrowserRouter>
)
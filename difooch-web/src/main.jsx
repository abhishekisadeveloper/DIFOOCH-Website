import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import SignUp2 from './components/SignUp2/SignUp2.jsx'
import SignUp3 from './components/SignUp3/SignUp3.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-up-2" element={<SignUp2 />} />
      <Route path="/sign-up-3" element={<SignUp3 />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)

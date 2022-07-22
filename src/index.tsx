/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ByChipApp from './ByChipApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ByChipApp />
  </React.StrictMode>
);*/

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ContactUs} from "./pages/contactUs/ContactUs";
import {AboutPeeSoft} from "./pages/aboutPeeSoft/AboutPeeSoft";
import ByChipApp from "./PeeSoftApp";
import reportWebVitals from "./reportWebVitals";
import NoPage from "./pages/noPage/NoPage";
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<AboutPeeSoft />} />
                    <Route path="contact" element={<ContactUs />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(<ByChipApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

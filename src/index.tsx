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
import reportWebVitals from "./reportWebVitals";
import NoPage from "./pages/noPage/NoPage";
import {UserRegister} from "./modules/userRegister/UserRegister";
import {UserLogin} from "./modules/userLogin/UserLogin";
import Home from "./pages/home/Home";
import PeeSoftApp from "./PeeSoftApp";
import {InterestRate} from "./modules/interestRate/InterestRate";
import {InitI18n} from "./i18n";

export default function App() {
    InitI18n();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route index element={<PeeSoftApp />} />
                    <Route path="home" element={<PeeSoftApp />} />
                    <Route path="register" element={<UserRegister />} />
                    <Route path="login" element={<UserLogin />} />
                    <Route path="services" element={<Home />} />
                    <Route path="interest-rate" element={<InterestRate />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

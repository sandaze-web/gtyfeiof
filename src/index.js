import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './sass/style.scss'
import './index.css'
import FixedButton from "./components/FixedButton/FixedButton";
import CartServicesBottomPanel from "./components/CartServicesBottomPanel/CartServicesBottomPanel";
import ProtectedRouter from "./components/ProtectedRouter/ProtectedRouter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <div className="App">
            <App/>
            <FixedButton/>
            <CartServicesBottomPanel/>
        </div>
    </BrowserRouter>
);

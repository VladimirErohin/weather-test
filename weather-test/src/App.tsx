import React from 'react';
import Header from "./header/Header";
import './styles/index.scss';
import AppRouter from "./AppRouter";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <div className="container">
            <BrowserRouter>
                <Header/>
                <AppRouter/>
            </BrowserRouter>

        </div>
    );
}

export default App;

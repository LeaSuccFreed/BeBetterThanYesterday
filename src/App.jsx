import React, {Fragment} from 'react';
import {Routes, Route} from 'react-router-dom';

import {GlobalStyle} from './global_style.js';

// Components 
import Header from './Components/header/Header.jsx'
import HomePage from './Pages/home-page/HomePage.jsx'
import LogIn from './Pages/log_in-page/LogIn.jsx'
import SelfHelp from './Pages/self-help/SelfHelp.jsx'

const App = () => {

    return (
        <Fragment>
            <GlobalStyle />
            <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/selfhelp" element={<SelfHelp/>} />
                </Routes>
        </Fragment>
    )
}

export default App
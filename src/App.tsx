import { Router, Route, Routes } from "@solidjs/router";

import LandingPage from './pages/Landing.page';
import Layout from "./Layout";

import './typefonts.tsx';
import { css } from "../styled-system/css/css";



function App() {
    return (
        <div class={css({
            width: '100vw',
            // minHeight: '100vh',
            overflow: 'hidden',
        })}>
            <Router>
                <Routes>
                    <Route path='/' component={Layout}>
                        <Route path='/' component={LandingPage} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
};


export default App;
import { Router, Route, Routes } from "@solidjs/router";

import LandingPage from "./pages/Landing.page";
import Layout from "./Layout";

import "./typefonts.tsx";
import { css } from "../styled-system/css/css";
import GuestsPage from "./pages/Guests.page.tsx";
import { TransitionGroup } from "solid-transition-group";
import SupportPage from "./pages/Support.page.tsx";
import AboutPage from "./pages/About.page.tsx";

function App() {
    return (
        <div
            class={css({
                width: "100vw",
                // minHeight: '100vh',
                overflow: "hidden",
            })}
        >
            <Router>
                <Routes>
                    <Route path='/' component={Layout}>
                            <Route path='/' component={LandingPage} />
                            <Route path='/convidados' component={GuestsPage} />
                            <Route path='/apoio' component={SupportPage} />
                            <Route path='/sobre-nos' component={AboutPage} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;

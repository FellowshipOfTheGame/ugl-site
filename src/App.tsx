import { Router, Route, Routes } from '@solidjs/router';

import LandingPage from './pages/Landing.page';
import Layout from './Layout';

import './typefonts.tsx';
import { css } from '../styled-system/css/css';
import GuestsPage from './pages/Guests.page.tsx';
import SupportPage from './pages/Support.page.tsx';
import AboutPage from './pages/About.page.tsx';
import { lazy } from 'solid-js';
// import GalleryPage from "./pages/Gallery.page.tsx";

const GalleryPage = lazy(() => import('./pages/Gallery.page.tsx'));

function App() {
  return (
    <div
      class={css({
        width: '100%',
        maxWidth: '100vw',
        overflow: 'hidden',
        overflowX: 'hidden',
        pt: { base: '80px', md: '100px' },
      })}
    >
      <Router>
        <Routes>
          <Route path={'/'} component={Layout}>
            <Route path="/" component={LandingPage} />
            <Route path="/convidados" component={GuestsPage} />
            <Route path="/apoio" component={SupportPage} />
            <Route path="/sobre-nos" component={AboutPage} />
            <Route path="/galeria" component={GalleryPage} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

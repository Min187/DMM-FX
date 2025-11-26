import React from 'react';
import { HashRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Basics } from './pages/Basics';
import { Campaign } from './pages/Campaign';
import { Guide } from './pages/Guide';
import { Comparison } from './pages/Comparison';
import { News } from './pages/News';
import { Contact } from './pages/Contact';
import { AppRoute } from './types';

// ScrollToTop component to ensure pages start at top on navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = React.useMemo(() => ({ pathname: window.location.hash }), []);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path={AppRoute.HOME} element={<Home />} />
          <Route path={AppRoute.BASICS} element={<Basics />} />
          <Route path={AppRoute.CAMPAIGN} element={<Campaign />} />
          <Route path={AppRoute.GUIDE} element={<Guide />} />
          <Route path={AppRoute.COMPARISON} element={<Comparison />} />
          <Route path={AppRoute.NEWS} element={<News />} />
          <Route path={AppRoute.CONTACT} element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
import React from 'react';
import MainPage from '../pages/main.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './scroll-to-top.tsx';
import Error404Page from '../pages/error404.tsx';
import LoginPage from '../pages/login.tsx';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import FavoritesPage from '../pages/favorites.tsx';
import OfferPage from '../pages/offer.tsx';
import PrivateRoute from './private-route.tsx';
import Layout from './layout.tsx';

type AppProps = {
  offersCount: number;
}

const App = ({ offersCount } : AppProps): React.JSX.Element => (
  <BrowserRouter>
    <ScrollToTop></ScrollToTop>
    <Routes>
      <Route path={AppRoute.Main} element={<Layout />}>
        <Route index element={<MainPage offersCount={offersCount} />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferPage />}/>
      </Route>
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route path={AppRoute.Unknown} element={<Error404Page />}/>
    </Routes>
  </BrowserRouter>
);

export default App;

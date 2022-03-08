import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../utils/const';
import PageHome from '../../pages/page-home/page-home';
import PageLogin from '../../pages/page-login/page-login';
import PageOffer from '../../pages/page-offer/page-offer';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import PageFavorites from '../../pages/page-favorites/page-favorites';
import {useAppSelector} from '../../hooks';

function App(): JSX.Element {

  const {city, offers} = useAppSelector((state) => state);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<PageHome offers = {offers} city={city} />}
        />
        <Route
          path={AppRoute.Login}
          element={<PageLogin />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <PageFavorites offers = {offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<PageOffer />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

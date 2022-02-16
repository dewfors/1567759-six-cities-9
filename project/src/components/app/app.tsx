import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../utils/const';
import PageHome from '../../pages/page-home/page-home';
import PageLogin from '../../pages/page-login/page-login';
import PageFavorites from '../../pages/page-favorites/page-favorites';
import PageOffer from '../../pages/page-offer/page-offer';
import PageNotFound from '../../pages/page-not-found/page-not-found';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<PageHome />}
        />
        <Route
          path={AppRoute.Login}
          element={<PageLogin />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<PageFavorites />}
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

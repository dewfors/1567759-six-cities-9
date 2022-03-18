import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../utils/const';
import PageHome from '../../pages/page-home/page-home';
import PageLogin from '../../pages/page-login/page-login';
import PageOffer from '../../pages/page-offer/page-offer';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import PageFavorites from '../../pages/page-favorites/page-favorites';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../services/browser-history';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(): JSX.Element {

  const {city, stateOffers} = useAppSelector((state) => state);
  const {isDataLoaded, offers} = stateOffers;

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <ToastContainer position="top-center" />
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<PageHome city={city} />}
        />
        <Route
          path={AppRoute.Login}
          element={<PageLogin />}
        />
        <Route
          path={AppRoute.Favorite}
          element={
            <PrivateRoute>
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
    </HistoryRouter>

  );
}

export default App;

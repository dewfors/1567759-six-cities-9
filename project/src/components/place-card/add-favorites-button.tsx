import {useParams} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../utils/const';
import {useAppSelector} from '../../hooks/use-app-selector';
import browserHistory from '../../services/browser-history';
import {postFavoriteStatusAction} from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch';

type AddFavoritesButtonProps = {
  id: number,
  isFavorite: boolean,
  place: AppRoute,
}

function AddFavoritesButton(props: AddFavoritesButtonProps): JSX.Element {
  const {id, isFavorite, place} = props;

  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuth = authorizationStatus.status === AuthorizationStatus.Auth;
  const params = useParams();

  const width = (place === AppRoute.Room && id === Number(params.id)) ? 31 : 18;
  const height = (place === AppRoute.Room && id === Number(params.id)) ? 33 : 19;

  const addToFavoritesClassName = (place === AppRoute.Room && id === Number(params.id))
    ? 'property__bookmark-button button'
    : 'place-card__bookmark-button button';
  const addToFavoritesActiveClassName = isFavorite ? 'place-card__bookmark-button--active' : '';


  const handleAddToFavorites = () => {
    if (!isAuth) {
      browserHistory.push(AppRoute.Login);
    }
    dispatch(postFavoriteStatusAction({id, status: Number(!isFavorite)}));
  };

  return (
    <button
      className={`${addToFavoritesClassName} ${addToFavoritesActiveClassName}`}
      type="button"
      onClick={handleAddToFavorites}
    >
      <svg className="place-card__bookmark-icon" width={width} height={height}>
        <use xlinkHref="#icon-bookmark"> </use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );

}

export default AddFavoritesButton;

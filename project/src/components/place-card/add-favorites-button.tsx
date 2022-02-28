import {useLocation, useParams} from 'react-router-dom';
import {AppRoute} from '../../utils/const';

type AddFavoritesButtonProps = {
  id: number;
  isFavorite: boolean;
}

function AddFavoritesButton(props: AddFavoritesButtonProps): JSX.Element {
  const {id, isFavorite} = props;

  const params = useParams();
  const location = useLocation();
  const path: string = location.pathname;
  // eslint-disable-next-line no-console
  console.log(params);
  // console.log(location.pathname);
  // eslint-disable-next-line no-console
  console.log(path);

  // eslint-disable-next-line no-console
  console.log(id);

  const width = (path === AppRoute.Room && id === Number(params.id)) ? 31 : 18;
  const height = (path === AppRoute.Room && id === Number(params.id)) ? 33 : 19;


  const addToFavoritesClassName = (path === AppRoute.Room && id === Number(params.id))
    ? 'property__bookmark-button button'
    : 'place-card__bookmark-button button';
  const addToFavoritesActiveClassName = isFavorite ? 'place-card__bookmark-button--active' : '';

  return (
    <button
      className={`${addToFavoritesClassName} ${addToFavoritesActiveClassName}`}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width={width} height={height}>
        <use xlinkHref="#icon-bookmark"> </use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );

}

export default AddFavoritesButton;

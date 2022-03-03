import {Offer} from '../../types/offers';
import {getStarsWidth} from '../../utils/utils';
import {Link} from 'react-router-dom';
import AddFavoritesButton from './add-favorites-button';

type PlaceCardFavoriteProps = {
  offer: Offer;
}

function PlaceCardFavorite(props: PlaceCardFavoriteProps): JSX.Element {
  const {offer} = props;
  const {price, title, type, rating, previewImage, isFavorite, id} = offer;
  const starsWidth = getStarsWidth(rating);

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <AddFavoritesButton id={id} isFavorite={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${starsWidth}%`}}> </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );

}

export default PlaceCardFavorite;

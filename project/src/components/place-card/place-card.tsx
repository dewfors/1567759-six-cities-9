import {Link} from 'react-router-dom';
import {Offer} from '../../types/offers';
import Premium from '../premium/premium';
import AddFavoritesButton from './add-favorites-button';
import {getStarsWidth} from '../../utils/utils';

type PlaceCardProps = {
  offer: Offer;
  handleActiveOfferCard: (id: number) => void;
}

function PlaceCard(props: PlaceCardProps): JSX.Element {

  const {offer, handleActiveOfferCard} = props;
  const {price, isPremium, title, type, rating, previewImage, isFavorite, id} = offer;
  const starsWidth = getStarsWidth(rating);

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => handleActiveOfferCard(offer.id)}
      onMouseLeave={() => handleActiveOfferCard(0)}
    >
      <Premium isPremium={isPremium} />

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <AddFavoritesButton id={id} isFavorite={isFavorite} />

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${starsWidth}%`}} />
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

export default PlaceCard;

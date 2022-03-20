import {Link} from 'react-router-dom';
import {Offer} from '../../types/offers';
import Premium from '../premium/premium';
import AddFavoritesButton from './add-favorites-button';
import {getStarsWidth} from '../../utils/utils';
import {AppRoute, PageLocationType} from '../../utils/const';
import {useAppSelector} from '../../hooks';

const getClassNameArticle = (type: string): string => type === PageLocationType.HOME
  ? 'cities__place-card place-card'
  : 'near-places__card place-card';

const getClassesNameImage = (type: string): string => type === PageLocationType.HOME
  ? 'cities__image-wrapper place-card__image-wrapper'
  : 'near-places__image-wrapper place-card__image-wrapper';


type PlaceCardProps = {
  offerId: number;
  handleActiveOfferCard: (id: number) => void;
  pageLocationType: string;
}

function PlaceCard(props: PlaceCardProps): JSX.Element {

  const {stateOffers} = useAppSelector((state) => state);
  const {offers} = stateOffers;


  const {offerId, handleActiveOfferCard, pageLocationType} = props;

  const offer: Offer = offers.filter((item) => item.id === offerId)[0];
  const {price, isPremium, title, type, rating, previewImage, isFavorite, id} = offer;
  const starsWidth = getStarsWidth(rating);

  const classNameArticle = getClassNameArticle(pageLocationType);
  const classNameImage = getClassesNameImage(pageLocationType);

  return (
    <article
      className={classNameArticle}
      onMouseEnter={() => handleActiveOfferCard(offer.id)}
      onMouseLeave={() => handleActiveOfferCard(0)}
    >
      <Premium isPremium={isPremium} />

      <div className={classNameImage}>
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

          <AddFavoritesButton id={id} isFavorite={isFavorite} place={AppRoute.Root}/>

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

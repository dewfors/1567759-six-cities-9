import {CityOffersType} from '../../types/offers';
import {Link} from 'react-router-dom';
import PlaceCardFavorite from '../place-card/place-card-favorite';


type ListItemProps = {
  cityOffers: CityOffersType;
}

function ListItem(props: ListItemProps): JSX.Element{
  const {cityOffers} = props;
  const {cityName, listOffers} = cityOffers;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={`/#${cityName}`}>
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {listOffers.map((offer) => <PlaceCardFavorite key={String(offer.id)} offer={offer} />)}
      </div>
    </li>
  );

}

export default ListItem;

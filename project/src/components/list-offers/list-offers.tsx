import {Offers} from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type ListOffersProps = {
  offers: Offers;
}

function ListOffers({offers}: ListOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => <PlaceCard key={offer.id} offer={offer} />)}
    </div>
  );
}

export default ListOffers;

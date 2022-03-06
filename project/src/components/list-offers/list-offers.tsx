import {Offers} from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type ListOffersProps = {
  offers: Offers;
  handleActiveOfferCard: (id: number) => void;
}

function ListOffers(props: ListOffersProps): JSX.Element {
  const {offers, handleActiveOfferCard} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => <PlaceCard key={offer.id} offer={offer} handleActiveOfferCard={handleActiveOfferCard} />)}
    </div>
  );
}

export default ListOffers;

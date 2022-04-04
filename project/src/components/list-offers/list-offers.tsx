import {Offers} from '../../types/offers';
import PlaceCard from '../place-card/place-card';
import {PageLocationType} from '../../utils/const';

const getClassName = (type: string): string => type === PageLocationType.HOME
  ? 'cities__places-list places__list tabs__content'
  : 'near-places__list places__list';


type ListOffersProps = {
  offers: Offers;
  handleActiveOfferCard: (id: number) => void;
  pageLocationType: string;
}

function ListOffers(props: ListOffersProps): JSX.Element {
  const {offers, handleActiveOfferCard, pageLocationType} = props;
  const className = getClassName(pageLocationType);

  return (
    <div className={className}>
      {offers.map((offer, i) => (
        <PlaceCard
          key={offer.id}
          offerId={offer.id}
          handleActiveOfferCard={handleActiveOfferCard}
          pageLocationType={pageLocationType}
        />
      ))}
    </div>
  );
}

export default ListOffers;

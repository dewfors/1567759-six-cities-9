import {memo} from 'react';
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
          offer={offer}
          handleActiveOfferCard={handleActiveOfferCard}
          pageLocationType={pageLocationType}
        />
      ))}
    </div>
  );
}

export default memo(ListOffers,(prevProps, nextProps) => {
  const isOffersEqual = (prevOffers: Offers, nextOffers: Offers) => prevOffers.every(
    (item, index) => item.id === nextOffers[index].id);
  return isOffersEqual(prevProps.offers, nextProps.offers);
});

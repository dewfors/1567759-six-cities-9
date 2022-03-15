import React, { useState } from 'react';
import {Offer, Offers, OffersSortingType} from '../../types/offers';
import ListOffers from '../../components/list-offers/list-offers';
import Map from '../../components/map/map';
import {PageLocationType, SortTypes} from '../../utils/const';
import SortOffers from '../../components/sort-offers/sort-offers';
import {useAppSelector} from '../../hooks';


type sortFunctionType = (a: Offer, b: Offer) => number;
const getFunctionToCompare = (sortType: OffersSortingType): sortFunctionType => {
  switch (sortType) {
    case SortTypes.PriceLowToHigh:
      return (a: Offer, b: Offer) => a.price - b.price;
    case SortTypes.PriceHighToLow:
      return (a: Offer, b: Offer) => b.price - a.price;
    case SortTypes.TopRatedFirst:
      return (a: Offer, b: Offer) => b.rating - a.rating;
    default:
      return () => 0;
  }
};

type HomeContentProps = {
  offers: Offers;
}

function HomeContent(props: HomeContentProps): JSX.Element {
  const {sort} = useAppSelector((state) => state);
  const {offers} = props;
  const offersCount = offers.length;
  const city = offers[0].city;
  const points = offers.map(({ id, location }) => ({ id, location }));

  const pageLocationType = PageLocationType.HOME;

  const [activeOfferCardId, setActiveOfferCardId] = useState(0);
  const handleActiveOfferCard = (id: number) => {
    setActiveOfferCardId(id);
  };

  const sortedOffers = [...offers].sort(getFunctionToCompare(sort as OffersSortingType));

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">${offersCount} places to stay in {city.name}</b>

          <SortOffers />

          <ListOffers
            offers = {sortedOffers as Offers}
            handleActiveOfferCard={handleActiveOfferCard}
            pageLocationType={pageLocationType}
          />

        </section>
        <div className="cities__right-section">
          <Map city={city} points={points} selectedPoint={activeOfferCardId} pageLocationType={pageLocationType} />
        </div>
      </div>
    </div>
  );
}

export default HomeContent;

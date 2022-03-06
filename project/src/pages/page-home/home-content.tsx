import React, { useState } from 'react';
import {Offers} from '../../types/offers';
import ListOffers from '../../components/list-offers/list-offers';
import Map from '../../components/map/map';

type HomeContentProps = {
  offers: Offers;
}

function HomeContent(props: HomeContentProps): JSX.Element {
  const {offers} = props;
  const offersCount = offers.length;
  const city = offers[0].city;
  const points = offers.map(({ id, location }) => ({ id, location }));

  const [activeOfferCardId, setActiveOfferCardId] = useState(0);
  const handleActiveOfferCard = (id: number) => {
    setActiveOfferCardId(id);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">${offersCount} places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select" />
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>

          <ListOffers offers = {offers as Offers} handleActiveOfferCard={handleActiveOfferCard} />

        </section>
        <div className="cities__right-section">
          <Map city={city} points={points} selectedPoint={activeOfferCardId} />
        </div>
      </div>
    </div>
  );
}

export default HomeContent;

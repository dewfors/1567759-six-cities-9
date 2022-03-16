import React, {useEffect, useState} from 'react';
import Header from '../../components/header/header';
import Reviews from '../../components/reviews/reviews';
import Map from '../../components/map/map';
import {PageLocationType} from '../../utils/const';
import {Offers} from '../../types/offers';
import ListOffers from '../../components/list-offers/list-offers';
import { useParams } from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import PageNotFound from '../page-not-found/page-not-found';
import Gallery from './gallery';
import { getStarsWidth } from '../../utils/utils';
import Host from './host';
import {fetchCommentsAction, fetchOfferNearbyAction} from '../../store/api-actions';
import store from '../../store';

function PageOffer() {

  const paramsId = Number(useParams().id);
  const {stateOffers} = useAppSelector((state) => state);
  const {offers} = stateOffers;

  const isOfferExist = offers.find((offer) => offer.id === paramsId);
  const currentOffer = offers.filter((offer) => offer.id===paramsId)[0];

  const {images, isPremium, title, rating, type, bedrooms, maxAdults,
    price, goods, host, description, city} = currentOffer;
  const imagesToRender = images.slice(0, 6);

  useEffect(() => {
    store.dispatch(fetchOfferNearbyAction(paramsId));
  }, [paramsId]);
  useEffect(() => {
    store.dispatch(fetchCommentsAction(paramsId));
  }, [paramsId]);

  const {stateOffersNearby} = useAppSelector((state) => state);
  const {stateComments} = useAppSelector((state) => state);

  const {comments} = stateComments;
  // eslint-disable-next-line no-console
  console.log(comments);

  const {offersNearby} = stateOffersNearby;
  const offersToMap = [...offersNearby, currentOffer];

  const points = offersToMap.map(({ id, location }) => ({ id, location }));

  const pageLocationType = PageLocationType.ROOM;

  const [activeOfferCardId, setActiveOfferCardId] = useState(0);
  const handleActiveOfferCard = (id: number) => {
    setActiveOfferCardId(id);
  };

  if (!isOfferExist) {
    return <PageNotFound />;
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images
              && (<Gallery images={imagesToRender} />)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium
              && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getStarsWidth(rating)}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${bedrooms} ${bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${maxAdults} ${maxAdults > 1 ? 'adults' : 'adult'}`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods && goods.map((elem) => (
                    <li
                      key={elem}
                      className="property__inside-item"
                    >
                      {elem}
                    </li>
                  ))}
                </ul>
              </div>
              {host && (
                <Host host={host} description={description} />
              )}
              <Reviews reviews={comments} />
            </div>
          </div>

          <Map city={city} points={points} selectedPoint={activeOfferCardId} pageLocationType={pageLocationType} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <ListOffers
              offers = {offersNearby as Offers}
              handleActiveOfferCard={handleActiveOfferCard}
              pageLocationType={pageLocationType}
            />

          </section>
        </div>
      </main>

    </div>
  );
}

export default PageOffer;

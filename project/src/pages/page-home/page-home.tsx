import React from 'react';
import Page from '../../components/page/page';
import Main from '../../components/main/main';
import HomeContent from './home-content';
import CityList from '../../components/cities-list/cities-list';
import ListOffersEmpty from '../../components/list-offers/list-offers-empty';
import {useAppSelector} from '../../hooks';


function PageHome(): JSX.Element {
  const {city, stateOffers} = useAppSelector((state) => state);
  const {offers} = stateOffers;

  const offersByCity = offers.filter((item) => item.city.name === city);

  const isOffersEmpty = offersByCity.length === 0;
  const pageMainIndexEmptyClassName = isOffersEmpty ? 'page__main--index-empty' : '';

  return (
    <Page className="page--gray page--main">
      <Main className={`page__main--index ${pageMainIndexEmptyClassName}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList city={city} />
        </div>
        {isOffersEmpty
          ? <ListOffersEmpty />
          :<HomeContent offers = {offersByCity}/>}
      </Main>
    </Page>
  );
}

export default PageHome;

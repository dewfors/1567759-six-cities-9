import React from 'react';
import Page from '../../components/page/page';
import Main from '../../components/main/main';
import HomeContent from './home-content';
import {Offers} from '../../types/offers';
import CityList from '../../components/cities-list/cities-list';
import ListOffersEmpty from '../../components/list-offers/list-offers-empty';

type PageHomeProps = {
  offers: Offers;
  city: string;
}

function PageHome(props: PageHomeProps): JSX.Element {
  const {offers, city} = props;
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
          :<HomeContent offers = {offers}/>}
      </Main>
    </Page>
  );
}

export default PageHome;

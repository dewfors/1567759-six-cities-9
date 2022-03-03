import React from 'react';
import Page from '../../components/page/page';
import Main from '../../components/main/main';
import CityList from './city-list';
import HomeContent from './home-content';
import {Offers} from '../../types/offers';

type PageHomeProps = {
  offers: Offers;
}

function PageHome(props: PageHomeProps): JSX.Element {
  const {offers} = props;
  const isOffersEmpty = false;
  const pageMainIndexEmptyClassName = isOffersEmpty ? 'page__main--index-empty' : '';

  return (
    <Page className="page--gray page--main">
      <Main className={`page__main--index ${pageMainIndexEmptyClassName}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CityList />
        <HomeContent offers = {offers}/>
      </Main>
    </Page>
  );
}

export default PageHome;

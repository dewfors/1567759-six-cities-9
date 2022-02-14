import * as React from 'react';
import Page from '../page/page';
import Main from '../main/main';
import CityList from './city-list';
import HomeContent from './home-content';


function PageHome(): JSX.Element {

  const isOffersEmpty = false;
  const pageMainIndexEmptyClassName = isOffersEmpty ? 'page__main--index-empty' : '';
  const offersCount = 31;

  return (
    <Page className="page--gray page--main">
      <Main className={`page__main--index ${pageMainIndexEmptyClassName}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CityList />
        <HomeContent offersCount={offersCount}/>
      </Main>
    </Page>
  );
}

export default PageHome;

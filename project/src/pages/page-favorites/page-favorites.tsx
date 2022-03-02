import React from 'react';
import Header from '../../components/header/header';
import {Offers} from '../../types/offers';
import ListOffersFavorite from '../../components/list-offers/list-offers-favorite';

type PageFavoritesProps = {
  offers: Offers;
}

function PageFavorites(props: PageFavoritesProps): JSX.Element {

  const {offers} = props;
  const offersFavorites = offers.filter((offer) => offer.isFavorite);

  const content = <ListOffersFavorite offers={offersFavorites} />;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {content}
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}

export default PageFavorites;

import {CityOffersType, Offers} from '../../types/offers';
import ListItem from './list-item';


type ListOffersFavoriteProps = {
  offers: Offers;
}

const getListCityOffers = (offers: Offers): CityOffersType[] => {
  const cities = new Set(offers.map((card) => card.city.name));
  return [...cities].map((city) => ({cityName: city, listOffers: offers.filter((item) => item.city.name === city)}));
};

function ListOffersFavorite(props: ListOffersFavoriteProps): JSX.Element {
  const {offers} = props;
  const listCityOffers = getListCityOffers(offers);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {listCityOffers.map((cityOffers) => <ListItem key={cityOffers.cityName} cityOffers={cityOffers} />)}
      </ul>
    </section>
  );
}

export default ListOffersFavorite;

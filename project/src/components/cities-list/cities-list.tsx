import { useAppDispatch } from '../../hooks';
import { setCityName } from '../../store/reducers/city-reducer';
import {Settings} from '../../utils/const';

function CityList(props: { city: string }) {
  const {city} = props;
  const {CITYES} = Settings;
  const dispatch = useAppDispatch();

  function handleClick(cityName: string) {
    return () => dispatch(setCityName(cityName));
  }

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITYES.map((cityName) => {
          const className = `locations__item-link tabs__item${cityName === city && ' tabs__item--active'}`;
          return (
            <li key={cityName} className="locations__item" onClick={handleClick(cityName)}>
              <a className={className} href="#locations__item">
                <span>{cityName}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CityList;

import {useAppSelector} from '../../hooks/use-app-selector';
import React, { useState } from 'react';
import { offersSortingTypes } from '../../utils/const';
import {OffersSortingType} from '../../types/offers';
import { setSortType } from '../../store/reducers/sort-reducer';
import { useAppDispatch } from '../../hooks/use-app-dispatch';


const getSortTypeName = (type: OffersSortingType): string => {
  const sortTypes = {
    popular: 'Popular',
    priceLowToHigh: 'Price: low to high',
    priceHighToLow: 'Price: high to low',
    topRatedFirst: 'Top rated first',
  };
  return sortTypes[type];
};

function SortOffers(): JSX.Element {
  const dispatch = useAppDispatch();
  const {sort} = useAppSelector((state) => state);

  const [isVisibleSortMenu, setVisibleSortMenu] = useState(false);

  const sortMenuClass = `places__options places__options--custom ${isVisibleSortMenu && 'places__options--opened'}`;

  const handleOnClickVisibleSortMenu = () => {
    setVisibleSortMenu((state) => !state);
  };

  const setCurrentSort = (value: string) => {
    dispatch(setSortType(value));
  };

  const handleOnChangeSortType = (sortType: OffersSortingType) => {
    setCurrentSort(sortType);
    setVisibleSortMenu((state) => !state);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => handleOnClickVisibleSortMenu()}>
        {sort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={sortMenuClass}>
        {offersSortingTypes.map((item) => (
          <li
            key={item}
            className="places__option"
            tabIndex={0}
            onClick={() => handleOnChangeSortType(item)}
          >
            {getSortTypeName(item)}
          </li>
        ))}
      </ul>
    </form>

  );
}

export default SortOffers;

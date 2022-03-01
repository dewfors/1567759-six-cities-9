import React from 'react';
import {FormReviewKey} from '../../utils/const';


type StarType = {id: number};
type StarsProps = {
  starsList: StarType[];
  onChangeData: (key: string, value: string|number)=>null|undefined;
  currentValue: number;
};


function Stars(props: StarsProps): JSX.Element{

  const {starsList, onChangeData, currentValue} = props;

  return (
    <>
      {starsList.map((item)=> (
        <React.Fragment key={item.id}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            // value={`${item.id}`}
            value={`${currentValue}`}
            id={`${item.id}-stars`}
            type="radio"
            onChange={() => onChangeData(FormReviewKey.STARS, item.id)}
          />
          <label htmlFor={`${item.id}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"> </use>
            </svg>
          </label>
        </React.Fragment>
      ))}
    </>
  );

}

export default Stars;

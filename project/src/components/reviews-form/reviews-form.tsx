import {FormEvent, useState} from 'react';
import {getStarsList} from '../../utils/utils';
import {FormReviewKey} from '../../utils/const';
import Stars from './stars';
import { NewReview } from '../../types/review';
import store from '../../store';
import { postCommentAction } from '../../store/api-actions';

type ReviewsFormProps = {
  hotelId: number,
}

function ReviewsForm(props: ReviewsFormProps): JSX.Element {
  const {hotelId} = props;

  const starsList = getStarsList();

  const [userData, setUserData] = useState({comment: '', rating: 0});

  const onChangeData = (key: string, value: string | number): null | undefined => {
    switch (key) {
      case FormReviewKey.REVIEW:
        if (typeof value === 'string') {
          setUserData({...userData, comment: value});
        }
        break;
      case FormReviewKey.STARS:
        if (typeof value === 'number') {
          setUserData({...userData, rating: value});
        }
        break;
      default:
        return null;
    }
  };

  const onSubmit = (newReview: NewReview) => {
    store.dispatch(postCommentAction(newReview));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit(
      {
        review: userData,
        id: hotelId,
      },
    );
  };

  return (
    <form
      className="reviews__form form"
      action="/#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <Stars starsList={starsList} onChangeData={onChangeData} currentValue={userData.rating}/>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={userData.comment}
        onChange={({target}) => onChangeData(FormReviewKey.REVIEW, target.value)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );


}

export default ReviewsForm;


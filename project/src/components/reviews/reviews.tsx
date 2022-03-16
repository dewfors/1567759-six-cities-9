import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsList from './reviews-list';
import {Comments} from '../../types/comments';
import {useAppSelector} from '../../hooks';
import React from 'react';
import {AuthorizationStatus} from '../../utils/const';

type ReviewsProps = {
  reviews: Comments | [],
  hotelId: number,
}

function Reviews(props: ReviewsProps): JSX.Element {
  const {reviews, hotelId} = props;

  const currentAuthorizationStatus = useAppSelector((state) => state.authorizationStatus);


  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList comments={reviews} />
      {currentAuthorizationStatus.status === AuthorizationStatus.Auth
      && (
        <ReviewsForm hotelId={hotelId} />
      )}

    </section>
  );
}

export default Reviews;

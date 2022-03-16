import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsList from './reviews-list';
import {Comments} from '../../types/comments';

type ReviewsProps = {
  reviews: Comments | [],
}

function Reviews(props: ReviewsProps): JSX.Element {
  const {reviews} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList comments={reviews} />
      <ReviewsForm />
    </section>
  );
}

export default Reviews;

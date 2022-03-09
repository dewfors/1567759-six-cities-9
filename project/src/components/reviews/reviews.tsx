import ReviewsForm from '../reviews-form/reviews-form';
import {comments} from '../../mocks/comments';
import ReviewsList from './reviews-list';

function Reviews(): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ReviewsList comments={comments} />
      <ReviewsForm />
    </section>
  );
}

export default Reviews;

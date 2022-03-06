import {Comments} from '../../types/comments';
import Review from './review';

type ReviewsListProps = {
  comments: Comments;
}

function ReviewsList(props: ReviewsListProps): JSX.Element {
  const {comments} = props;
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <Review key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}

export default ReviewsList;

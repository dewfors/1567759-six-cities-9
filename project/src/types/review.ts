export type Review = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
  avatarUrl: string
  id: number
  isPro: boolean
  name: string
  }
};

export type Reviews = Review[];

export type CommentDataType = { rating: number, comment: string };

export type NewReview = {
  review: {
    comment: string,
    rating: number
  },
  id: number,
};

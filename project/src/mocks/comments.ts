import {Comments} from '../types/comments';
import {IMG_URL} from '../utils/const';


export const comments: Comments = [
  {
    id: 1,
    rating: 4,
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2022-02-15T21:48:13.665Z',
    user: {
      id: 17,
      isPro: false,
      name: 'Emely',
      avatarUrl: `${IMG_URL}avatar-angelina.jpg`,
    },
  },
];

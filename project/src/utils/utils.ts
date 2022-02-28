import {MAX_PERSENT, MAX_STARS} from './const';

export const getStarsWidth = (rating: number) => rating * MAX_PERSENT / MAX_STARS;

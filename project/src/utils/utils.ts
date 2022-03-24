import {MAX_PERSENT, MAX_STARS, Settings} from './const';

export const getStarsWidth = (rating: number) => rating * MAX_PERSENT / MAX_STARS;

export const getStarsList = () => new Array(MAX_STARS).fill('').map((item, i) => ({id: i + 1})).reverse();

export const getRandomCity  = (): string => Settings.CITYES[Math.floor(Math.random() * Settings.CITYES.length)];

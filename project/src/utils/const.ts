import { OffersSortingType } from '../types/offers';

export const MAX_PERSENT = 100;
export const MAX_STARS = 5;

export const IMG_URL = 'img/';
export const TIMEOUT_SHOW_ERROR = 2000;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorite = '/favorite',
  Room = '/offer/:id',
}

export enum APIRoute {
  Offers = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const FormReviewKey = {
  STARS: 'stars',
  REVIEW: 'review',
};

export const PageLocationType = {
  HOME: 'home',
  ROOM: 'room',
};

export enum Pins {
  Normal = 'pin.svg',
  Active = 'pin-active.svg',
}

export const Settings = {
  CITYES: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'],
  DEFAULT_CITY: 'Paris',
};

export enum SortTypes {
  Popular = 'popular',
  PriceLowToHigh = 'priceLowToHigh',
  PriceHighToLow = 'priceHighToLow',
  TopRatedFirst = 'topRatedFirst',
}

export const offersSortingTypes: OffersSortingType[] = ['popular', 'priceLowToHigh', 'priceHighToLow', 'topRatedFirst'];

export const MAX_PERSENT = 100;
export const MAX_STARS = 5;

export const IMG_URL = 'img/';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
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

export const MapLocationType = {
  HOME: 'home',
  ROOM: 'room',
}

export enum Pins {
  Normal = 'pin.svg',
  Active = 'pin-active.svg',
}

export const MAX_PERSENT = 100;
export const MAX_STARS = 5;

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

export enum Pins {
  Normal = 'img/pin.svg',
  Active = 'img/pin-active.svg',
}

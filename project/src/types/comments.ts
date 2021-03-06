import { User } from './user';

export type Comment = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: Omit<User, 'email' | 'token'>,
}

export type Comments = Comment[];

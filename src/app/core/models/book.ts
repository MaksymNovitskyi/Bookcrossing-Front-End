import { IRoomLocation } from './roomLocation';
import { IAuthor } from "src/app/core/models/author";
import { IGenre } from "src/app/core/models/genre";
import {bookState} from './bookState.enum';
export interface IBook {
  id?: number;
  name: string;
  userId: number;
  publisher?: string;
  state: bookState;
  authors: IAuthor[];
  rating: number;
  genres: IGenre[];
  imagePath?: string;
  notice?: string;
  location: IRoomLocation;
}

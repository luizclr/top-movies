import { Genre } from "~/entities/genre";
import { Movie } from "~/entities/movie";

export type Pagination<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export type GetGenresListeners = {
  onSuccess: (genres: Genre[]) => void;
  onError: () => void;
};

export type GetMoviesByGenreListeners = {
  onSuccess: (genres: Pagination<Movie>) => void;
  onError: () => void;
};

export type GetMoviesListeners = {
  onSuccess: (genres: Pagination<Movie>) => void;
  onError: () => void;
};

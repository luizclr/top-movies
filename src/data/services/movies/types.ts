import { EntireMovie } from "~/entities/entire-movie";
import { Genre } from "~/entities/genre";
import { PartialMovie } from "~/entities/partial-movie";

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
  onSuccess: (genres: Pagination<PartialMovie>) => void;
  onError: () => void;
};

export type GetMovieByIdListeners = {
  onSuccess: (movie: EntireMovie) => void;
  onError: () => void;
};

export type GetMoviesListeners = {
  onSuccess: (genres: Pagination<PartialMovie>) => void;
  onError: () => void;
};

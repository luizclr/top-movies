import {
  GetGenresListeners,
  GetMovieByIdListeners,
  GetMoviesByGenreListeners,
  GetMoviesListeners,
} from "~/data/services/movies/types";

export interface MoviesService {
  getGenres: (listeners: GetGenresListeners) => Promise<void>;
  getMovies: (listeners: GetMoviesListeners) => Promise<void>;
  getMoviesByGenre: (genreId: number, listeners: GetMoviesByGenreListeners) => Promise<void>;
  getMovieById: (id: number, listeners: GetMovieByIdListeners) => Promise<void>;
}

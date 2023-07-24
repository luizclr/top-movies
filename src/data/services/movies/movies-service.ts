import {
  GetCastListeners,
  GetGenresListeners,
  GetMovieByIdListeners,
  GetMoviesByGenreListeners,
  GetMoviesListeners,
  GetRecommendationsListeners,
} from "~/data/services/movies/types";

export interface MoviesService {
  getGenres: (listeners: GetGenresListeners) => Promise<void>;
  getMovies: (listeners: GetMoviesListeners) => Promise<void>;
  getMoviesByGenre: (genreId: number, listeners: GetMoviesByGenreListeners) => Promise<void>;
  getMovieById: (id: number, listeners: GetMovieByIdListeners) => Promise<void>;
  getRecommendations: (id: number, listeners: GetRecommendationsListeners) => Promise<void>;
  getCast: (id: number, listeners: GetCastListeners) => Promise<void>;
}

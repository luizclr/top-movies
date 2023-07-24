import {
  GetCastListeners,
  GetGenresListeners,
  GetMovieByIdListeners,
  GetMoviesListeners,
  GetRecommendationsListeners,
  Options,
} from "~/data/services/movies/types";

export interface MoviesService {
  getGenres: (listeners: GetGenresListeners) => Promise<void>;
  getMovies: (options: Options, listeners: GetMoviesListeners) => Promise<void>;
  getMovieById: (id: number, listeners: GetMovieByIdListeners) => Promise<void>;
  getRecommendations: (id: number, listeners: GetRecommendationsListeners) => Promise<void>;
  getCast: (id: number, listeners: GetCastListeners) => Promise<void>;
}

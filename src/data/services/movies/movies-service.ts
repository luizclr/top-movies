import { GetGenresListeners, GetMoviesByGenreListeners } from "~/data/services/movies/types";

export interface MoviesService {
  getGenres: (listeners: GetGenresListeners) => Promise<void>;
  getMoviesByGenre: (genreId: number, listeners: GetMoviesByGenreListeners) => Promise<void>;
}

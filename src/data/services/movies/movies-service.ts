import { GetGenresListeners } from "~/data/services/movies/types";

export interface MoviesService {
  getGenres: (listeners: GetGenresListeners) => Promise<void>;
}

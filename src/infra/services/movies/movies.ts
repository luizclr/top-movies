import { HttpClient } from "~/data/http/http-client";
import { MoviesService } from "~/data/services/movies/movies-service";
import {
  GetGenresListeners,
  GetMoviesByGenreListeners,
  GetMoviesListeners,
} from "~/data/services/movies/types";
import { GetGenresResponseDTO } from "~/infra/services/movies/dto/get-genres-response";
import { GetMoviesByGenreResponseDTO } from "~/infra/services/movies/dto/get-movies-by-genre-response";

export default class AppMoviesService implements MoviesService {
  private readonly moviesUrl = "/movie/popular?language=pt-BR";

  constructor(private readonly httpClient: HttpClient) {}

  public async getGenres(listeners: GetGenresListeners): Promise<void> {
    try {
      const response = await this.httpClient.request({
        url: "/genre/movie/list?language=pt-BR",
        method: "get",
      });

      const { genres } = await response.getData(GetGenresResponseDTO.parse);

      listeners.onSuccess(genres);
    } catch {
      listeners.onError();
    }
  }

  public async getMoviesByGenre(
    genreId: number,
    listeners: GetMoviesByGenreListeners
  ): Promise<void> {
    try {
      const response = await this.httpClient.request({
        url: `${this.moviesUrl}&with_genres=${genreId}`,
        method: "get",
      });

      const movies = await response.getData(GetMoviesByGenreResponseDTO.parse);

      listeners.onSuccess(movies);
    } catch {
      listeners.onError();
    }
  }

  public async getMovies(listeners: GetMoviesListeners): Promise<void> {
    try {
      const response = await this.httpClient.request({
        url: this.moviesUrl,
        method: "get",
      });

      const movies = await response.getData(GetMoviesByGenreResponseDTO.parse);

      listeners.onSuccess(movies);
    } catch {
      listeners.onError();
    }
  }
}

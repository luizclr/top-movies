import { HttpClient } from "~/data/http/http-client";
import { MoviesService } from "~/data/services/movies/movies-service";
import {
  GetCastListeners,
  GetGenresListeners,
  GetMovieByIdListeners,
  GetMoviesListeners,
  GetRecommendationsListeners,
  GetVideosListeners,
  Options,
} from "~/data/services/movies/types";
import { GetCastsResponseDTO } from "~/infra/services/movies/dto/get-casts-response";
import { GetGenresResponseDTO } from "~/infra/services/movies/dto/get-genres-response";
import { GetMovieByIdResponseDTO } from "~/infra/services/movies/dto/get-movie-by-id-response";
import { GetMoviesByGenreResponseDTO } from "~/infra/services/movies/dto/get-movies-by-genre-response";
import { GetRecommendationsResponseDTO } from "~/infra/services/movies/dto/get-recommendations-response";
import { GetVideosResponseDTO } from "~/infra/services/movies/dto/get-videos-response";

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

  public async getMovies(
    { page = 1, genres = [] }: Options,
    listeners: GetMoviesListeners
  ): Promise<void> {
    try {
      const response = await this.httpClient.request({
        url: `${this.moviesUrl}&with_genres=${genres.join(",")}&page=${page}`,
        method: "get",
      });

      const movies = await response.getData(GetMoviesByGenreResponseDTO.parse);
      movies.total_pages = 20;

      listeners.onSuccess(movies);
    } catch {
      listeners.onError();
    }
  }

  public async getMovieById(id: number, listeners: GetMovieByIdListeners): Promise<void> {
    try {
      const response = await this.httpClient.request({
        url: `/movie/${id}?language=pt-BR`,
        method: "get",
      });

      const movie = await response.getData(GetMovieByIdResponseDTO.parse);

      listeners.onSuccess(movie);
    } catch {
      listeners.onError();
    }
  }

  public async getRecommendations(
    id: number,
    listeners: GetRecommendationsListeners
  ): Promise<void> {
    try {
      const response = await this.httpClient.request({
        url: `/movie/${id}/recommendations?language=pt-BR`,
        method: "get",
      });

      const movies = await response.getData(GetRecommendationsResponseDTO.parse);

      listeners.onSuccess(movies);
    } catch {
      listeners.onError();
    }
  }

  public async getCast(id: number, listeners: GetCastListeners): Promise<void> {
    try {
      const response = await this.httpClient.request({
        url: `/movie/${id}/casts?language=pt-BR`,
        method: "get",
      });

      const casts = await response.getData(GetCastsResponseDTO.parse);

      listeners.onSuccess(casts);
    } catch {
      listeners.onError();
    }
  }

  public async getVideos(id: number, listeners: GetVideosListeners): Promise<void> {
    try {
      const response = await this.httpClient.request({
        url: `/movie/${id}/videos?language=pt-BR`,
        method: "get",
      });

      const { results } = await response.getData(GetVideosResponseDTO.parse);

      listeners.onSuccess(results);
    } catch {
      listeners.onError();
    }
  }
}

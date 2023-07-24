import { HttpClient } from "~/data/http/http-client";
import { MoviesService } from "~/data/services/movies/movies-service";
import { GetGenresListeners } from "~/data/services/movies/types";
import { GetGenresResponseDTO } from "~/infra/services/movies/dto/get-genres-response";

export default class AppMoviesService implements MoviesService {
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
}

import { Cast } from "~/entities/cast";
import { Crew } from "~/entities/crew";
import { EntireMovie } from "~/entities/entire-movie";
import { Genre } from "~/entities/genre";
import { PartialMovie } from "~/entities/partial-movie";
import { Video } from "~/entities/video";

export type Pagination<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export type CastResponseType = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};

export type Options = {
  page?: number;
  genres?: number[];
};

export type GetGenresListeners = {
  onSuccess: (genres: Genre[]) => void;
  onError: () => void;
};

export type GetMovieByIdListeners = {
  onSuccess: (movie: EntireMovie) => void;
  onError: () => void;
};

export type GetMoviesListeners = {
  onSuccess: (movies: Pagination<PartialMovie>) => void;
  onError: () => void;
};

export type GetRecommendationsListeners = {
  onSuccess: (movies: Pagination<PartialMovie>) => void;
  onError: () => void;
};

export type GetCastListeners = {
  onSuccess: (cast: CastResponseType) => void;
  onError: () => void;
};

export type GetVideosListeners = {
  onSuccess: (videos: Video[]) => void;
  onError: () => void;
};

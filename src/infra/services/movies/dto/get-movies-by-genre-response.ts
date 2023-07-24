import { z } from "zod";

export const MovieDTO = z.object({
  id: z.number(),
  adult: z.boolean(),
  backdrop_path: z.string(),
  genre_ids: z.number().array(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const GetMoviesByGenreResponseDTO = z.object({
  page: z.number(),
  results: z.array(MovieDTO),
  total_pages: z.number(),
  total_results: z.number(),
});

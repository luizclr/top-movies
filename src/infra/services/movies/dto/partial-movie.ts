import { z } from "zod";

export const ParcialMovieDTO = z.object({
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

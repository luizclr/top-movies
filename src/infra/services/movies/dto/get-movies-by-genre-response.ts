import { z } from "zod";

import { ParcialMovieDTO } from "~/infra/services/movies/dto/partial-movie";

export const GetMoviesByGenreResponseDTO = z.object({
  page: z.number(),
  results: z.array(ParcialMovieDTO),
  total_pages: z.number(),
  total_results: z.number(),
});

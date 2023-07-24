import { z } from "zod";

export const GetGenresResponseDTO = z.object({
  genres: z
    .object({
      id: z.number(),
      name: z.string(),
    })
    .array(),
});

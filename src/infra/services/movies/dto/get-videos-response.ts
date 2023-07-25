import { z } from "zod";

import { VideoDTO } from "~/infra/services/movies/dto/video";

export const GetVideosResponseDTO = z.object({
  id: z.number(),
  results: z.array(VideoDTO),
});

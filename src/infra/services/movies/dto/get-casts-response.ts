import { z } from "zod";

import { CastDTO } from "~/infra/services/movies/dto/cast-response";
import { CrewDTO } from "~/infra/services/movies/dto/crew-response";

export const GetCastsResponseDTO = z.object({
  id: z.number(),
  cast: z.array(CastDTO),
  crew: z.array(CrewDTO),
});

import { z } from "zod";

export const CrewDTO = z.object({
  id: z.number(),
  adult: z.boolean(),
  gender: z.number(),
  known_for_department: z.string(),
  name: z.string(),
  original_name: z.string(),
  popularity: z.number(),
  profile_path: z.string().nullable(),
  credit_id: z.string(),
  department: z.string(),
  job: z.string(),
});

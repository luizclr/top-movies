import { Genre } from "~/entities/genre";

export type GetGenresListeners = {
  onSuccess: (genres: Genre[]) => void;
  onError: () => void;
};

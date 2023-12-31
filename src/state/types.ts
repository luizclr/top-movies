import { MoviesService } from "~/data/services/movies/movies-service";
import { StorageService } from "~/data/storage/storage-service";
import AuthService from "~/infra/services/auth/auth";
import UserService from "~/infra/services/user/user";

export type ServicesTypes = {
  authService: AuthService;
  userService: UserService;
  moviesService: MoviesService;
  storageService: StorageService;
};

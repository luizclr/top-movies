declare module "*.png";
declare module "*.gif";

declare namespace NodeJS {
  export interface ProcessEnv {
    BASE_URL: string;
    MOVIES_API: string;
    MOVIES_TOKEN: string;
    MOVIES_IMAGES_URL: string;
  }
}

import { Genre } from "~/entities/genre";

type BelongsToCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string | null;
} | null;

type ProductionCompanies = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type ProductionCountries = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export class EntireMovie {
  public constructor(
    public readonly adult: boolean,
    public readonly backdrop_path: string,
    public readonly belongs_to_collection: BelongsToCollection,
    public readonly budget: number,
    public readonly genres: Genre[],
    public readonly homepage: string,
    public readonly id: number,
    public readonly imdb_id: string,
    public readonly original_language: string,
    public readonly original_title: string,
    public readonly overview: string,
    public readonly popularity: number,
    public readonly poster_path: string,
    public readonly production_companies: ProductionCompanies[],
    public readonly production_countries: ProductionCountries[],
    public readonly release_date: string,
    public readonly revenue: number,
    public readonly runtime: number,
    public readonly spoken_languages: SpokenLanguages[],
    public readonly status: string,
    public readonly tagline: string,
    public readonly title: string,
    public readonly video: boolean,
    public readonly vote_average: number,
    public readonly vote_count: number
  ) {}
}

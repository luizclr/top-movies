import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { CardList } from "~/components/card-list/card-list";
import { CardListItemModel } from "~/components/card-list/types";
import { Pagination } from "~/components/pagination/pagination";
import { Options, Pagination as PaginationType } from "~/data/services/movies/types";
import { Genre } from "~/entities/genre";
import { PartialMovie } from "~/entities/partial-movie";
import {
  Container,
  Description,
  FilterContainer,
  List,
  ListItem,
  Text,
} from "~/pages/movies/movies.styles";
import { useApp } from "~/state/app/hook";
import GlobalContext from "~/state/global/context";

const emptyPagination = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

// eslint-disable-next-line max-lines-per-function
const Movies: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});
  const { moviesService } = useContext(GlobalContext);
  const { setIsLoading } = useApp();

  const [movies, setMovies] = useState<PaginationType<CardListItemModel>>(emptyPagination);
  const [page, setPage] = useState<number>(0);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  useEffect(() => {
    checkParams();
    getInitialData();
  }, []);

  useEffect(() => {
    updateParams();
    getMovies({ page, genres: selectedGenres }).catch(() => setIsLoading(false));
  }, [selectedGenres, page]);

  // params and setup
  const checkParams = (): void => {
    const initialPage = searchParams.get("page");
    const initialGenres = searchParams.get("genres");

    if (initialPage) setPage(parseInt(initialPage) - 1);
    if (initialGenres) setSelectedGenres(initialGenres.split(",").map((item) => parseInt(item)));
  };

  const updateParams = (): void => {
    searchParams.set("genres", selectedGenres.map((item) => item.toString()).join(","));
    searchParams.set("page", (page + 1).toString());
    setSearchParams(searchParams);
  };

  // api calls
  const getInitialData = (): void => {
    setIsLoading(true);
    Promise.all([getGenres(), getMovies({})])
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  };

  const getGenres = async (): Promise<void> => {
    const onSuccess = (genres: Genre[]): void => {
      setGenres(genres);
    };

    await moviesService.getGenres({ onSuccess, onError });
  };

  const getMovies = async ({ page = 0, genres = [] }: Options): Promise<void> => {
    setIsLoading(true);

    const onSuccess = (movies: PaginationType<PartialMovie>): void => {
      const results = moviesToCardListItemMapper(movies);

      setMovies({ ...movies, results });
      setIsLoading(false);
    };

    await moviesService.getMovies({ page: page + 1, genres }, { onSuccess, onError });
  };

  const onError = (): void => {
    setIsLoading(false);
  };

  // handlers
  const onPageChange = async (page: number): Promise<void> => {
    setPage(page);
    await getMovies({ page, genres: selectedGenres });
    window.scrollTo(0, 0);
  };

  const onSelectGenre = (genreId: number): void => {
    setPage(0);
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter((genre) => genre !== genreId));
    } else {
      setSelectedGenres([...selectedGenres, genreId]);
    }
  };

  // mappers
  const moviesToCardListItemMapper = (
    movies: PaginationType<PartialMovie>
  ): CardListItemModel[] => {
    return movies.results.map((movie) => ({
      id: movie.id,
      imgURL: `${process.env.MOVIES_IMAGES_URL}/w200${movie.poster_path}`,
      title: movie.title,
      subtitle: movie.release_date,
    }));
  };

  return (
    <div data-testid="movies">
      <FilterContainer>
        <Container>
          <Description>Milhões de filmes, séries e pessoas para descobrir. Explore já.</Description>
          <Text>FILTRE POR:</Text>
          <List>
            {genres.map((item) => (
              <ListItem
                key={item.id}
                onClick={() => onSelectGenre(item.id)}
                selected={selectedGenres.includes(item.id)}
              >
                {item.name}
              </ListItem>
            ))}
          </List>
        </Container>
      </FilterContainer>
      <Container data-testid="movies">
        <CardList onCardClick={(item) => navigate(`/movies/${item.id}`)} list={movies.results} />
        <Pagination onChange={onPageChange} totalPages={movies.total_pages} forcePage={page} />
      </Container>
    </div>
  );
};

export default Movies;

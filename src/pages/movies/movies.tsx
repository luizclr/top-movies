import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

const Movies: React.FC = () => {
  const navigate = useNavigate();
  const { moviesService } = useContext(GlobalContext);
  const { setIsLoading } = useApp();

  const [movies, setMovies] = useState<PaginationType<CardListItemModel>>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  const [page, setPage] = useState<number>(0);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getGenres(), getMovies({})])
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getMovies({ page, genres: selectedGenres }).catch(() => setIsLoading(false));
  }, [selectedGenres]);

  const getGenres = async (): Promise<void> => {
    const onSuccess = (genres: Genre[]): void => {
      setGenres(genres);
    };

    await moviesService.getGenres({ onSuccess, onError });
  };

  const getMovies = async ({ page = 0, genres = [] }: Options): Promise<void> => {
    setIsLoading(true);

    await moviesService.getMovies(
      { page: page + 1, genres },
      { onSuccess: onMoviesSuccess, onError }
    );
  };

  const onMoviesSuccess = (movies: PaginationType<PartialMovie>): void => {
    const parsedMovies: CardListItemModel[] = movies.results.map((movie) => ({
      id: movie.id,
      imgURL: `${process.env.MOVIES_IMAGES_URL}/w200${movie.poster_path}`,
      title: movie.title,
      subtitle: movie.release_date,
    }));

    setMovies({
      ...movies,
      results: parsedMovies,
    });
    setIsLoading(false);
  };

  const onError = (): void => {
    setIsLoading(false);
  };

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

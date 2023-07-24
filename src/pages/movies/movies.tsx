import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CardList } from "~/components/card-list/card-list";
import { CardListItemModel } from "~/components/card-list/types";
import { Container } from "~/components/container/container";
import { Pagination } from "~/data/services/movies/types";
import { Genre } from "~/entities/genre";
import { Movie } from "~/entities/movie";
import { Description, FilterContainer, List, ListItem, Text } from "~/pages/movies/movies.styles";
import { useApp } from "~/state/app/hook";
import GlobalContext from "~/state/global/context";

const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

const Movies: React.FC = () => {
  const navigate = useNavigate();
  const { moviesService } = useContext(GlobalContext);
  const { setIsLoading } = useApp();

  const [movies, setMovies] = useState<CardListItemModel[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getGenres(), getMovies()])
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getMoviesByGenre().catch(() => {});
  }, [selectedGenre]);

  const getGenres = async (): Promise<void> => {
    const onSuccess = (genres: Genre[]): void => {
      setGenres(genres);
    };

    await moviesService.getGenres({ onSuccess, onError: () => {} });
  };

  const getMovies = async (): Promise<void> => {
    await moviesService.getMovies({ onSuccess: onMoviesSuccess, onError: () => {} });
  };

  const getMoviesByGenre = async (): Promise<void> => {
    if (!selectedGenre) return;

    await moviesService.getMoviesByGenre(selectedGenre, {
      onSuccess: onMoviesSuccess,
      onError: () => {},
    });
  };

  const onMoviesSuccess = (movies: Pagination<Movie>): void => {
    const parsedMoviesPagination: CardListItemModel[] = movies.results.map((movie) => ({
      id: movie.id,
      imgURL: `${process.env.MOVIES_IMAGES_URL}/w200${movie.poster_path}`,
      title: movie.title,
      subtitle: formatDate(movie.release_date),
    }));

    setMovies(parsedMoviesPagination);
    setIsLoading(false);
  };

  const formatDate = (date: string): string => {
    const dateObject = new Date(date);

    return `${dateObject.getDate()} ${months[dateObject.getMonth()]} ${dateObject.getFullYear()}`;
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
                onClick={() => {
                  setSelectedGenre(item.id);
                }}
                selected={selectedGenre === item.id}
              >
                {item.name}
              </ListItem>
            ))}
          </List>
        </Container>
      </FilterContainer>
      <Container data-testid="movies">
        <CardList onCardClick={(item) => navigate(`/movies/${item.id}`)} list={movies} />
      </Container>
    </div>
  );
};

export default Movies;

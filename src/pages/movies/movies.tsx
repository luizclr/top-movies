import { useContext, useEffect, useState } from "react";

import { CardList } from "~/components/card-list/card-list";
import { CardListItemModel } from "~/components/card-list/types";
import { Container } from "~/components/container/container";
import { Pagination } from "~/data/services/movies/types";
import { Genre } from "~/entities/genre";
import { Movie } from "~/entities/movie";
import { Description, FilterContainer, List, ListItem, Text } from "~/pages/movies/movies.styles";
import { useApp } from "~/state/app/hook";
import GlobalContext from "~/state/global/context";

const initialState: CardListItemModel[] = [
  {
    id: 1,
    imgURL: "https://image.tmdb.org/t/p/w200/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    title: "Missão: Impossível",
    subtitle: "2023",
  },
  {
    id: 2,
    imgURL: "https://image.tmdb.org/t/p/w200/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    title: "Missão: Impossível",
    subtitle: "2023",
  },
  {
    id: 3,
    imgURL: "https://image.tmdb.org/t/p/w200/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    title: "Missão: Impossível",
    subtitle: "2023",
  },
  {
    id: 4,
    imgURL: "https://image.tmdb.org/t/p/w200/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    title: "Missão: Impossível",
    subtitle: "2023",
  },
  {
    id: 5,
    imgURL: "https://image.tmdb.org/t/p/w200/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    title: "Missão: Impossível",
    subtitle: "2023",
  },
  {
    id: 6,
    imgURL: "https://image.tmdb.org/t/p/w200/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    title: "Missão: Impossível",
    subtitle: "2023",
  },
  {
    id: 7,
    imgURL: "https://image.tmdb.org/t/p/w200/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    title: "Missão: Impossível",
    subtitle: "2023",
  },
];

const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

const Movies: React.FC = () => {
  const { moviesService } = useContext(GlobalContext);
  const { setIsLoading } = useApp();

  const [movies, setMovies] = useState<CardListItemModel[]>(initialState);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getGenres().catch(() => {});
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getMoviesByGenre().catch(() => {});
  }, [selectedGenre]);

  const getGenres = async (): Promise<void> => {
    const onSuccess = (genres: Genre[]): void => {
      setGenres(genres);
      setIsLoading(false);
    };

    await moviesService.getGenres({ onSuccess, onError: () => {} });
  };

  const getMoviesByGenre = async (): Promise<void> => {
    if (!selectedGenre) return;
    const onSuccess = (movies: Pagination<Movie>): void => {
      const parsedMoviesPagination: CardListItemModel[] = movies.results.map((movie) => ({
        id: movie.id,
        imgURL: `${process.env.MOVIES_IMAGES_URL}/w200${movie.poster_path}`,
        title: movie.title,
        subtitle: formatDate(movie.release_date),
      }));

      setMovies(parsedMoviesPagination);
      setIsLoading(false);
    };

    await moviesService.getMoviesByGenre(selectedGenre, { onSuccess, onError: () => {} });
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
        <CardList list={movies} />
      </Container>
    </div>
  );
};

export default Movies;

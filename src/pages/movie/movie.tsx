import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CardList } from "~/components/card-list/card-list";
import { CardListItemModel, CardSize } from "~/components/card-list/types";
import { Title } from "~/components/title/title.styles";
import { Video } from "~/components/video/video";
import { EntireMovie } from "~/entities/entire-movie";
import {
  Container,
  DirectingContainer,
  DirectingItem,
  Header,
  Image,
  ImageWrapper,
  InfoTitle,
  InfoWrapper,
  Label,
  MainInfo,
  MediaWrapper,
  Sinopse,
  Value,
} from "~/pages/movie/movie.styles";
import { useApp } from "~/state/app/hook";
import GlobalContext from "~/state/global/context";

type Directing = {
  id: number;
  name: string;
  role: string;
};
const initialDirecting: Directing[] = [
  {
    id: 1,
    name: "Will Smith",
    role: "Director",
  },
  {
    id: 2,
    name: "Will Smith",
    role: "Director",
  },
  {
    id: 3,
    name: "Will Smith",
    role: "Director",
  },
  {
    id: 4,
    name: "Will Smith",
    role: "Director",
  },
  {
    id: 5,
    name: "Will Smith",
    role: "Director",
  },
];
const initialCast: CardListItemModel[] = [
  {
    id: 1,
    imgURL: "https://image.tmdb.org/t/p/w200/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg",
    title: "Margot Robbie",
    subtitle: "Margot",
  },
  {
    id: 2,
    imgURL: "https://image.tmdb.org/t/p/w200/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg",
    title: "Margot Robbie",
    subtitle: "Margot",
  },
  {
    id: 3,
    imgURL: "https://image.tmdb.org/t/p/w200/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg",
    title: "Margot Robbie",
    subtitle: "Margot",
  },
  {
    id: 4,
    imgURL: "https://image.tmdb.org/t/p/w200/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg",
    title: "Margot Robbie",
    subtitle: "Margot",
  },
  {
    id: 5,
    imgURL: "https://image.tmdb.org/t/p/w200/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg",
    title: "Margot Robbie",
    subtitle: "Margot",
  },
  {
    id: 6,
    imgURL: "https://image.tmdb.org/t/p/w200/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg",
    title: "Margot Robbie",
    subtitle: "Margot",
  },
  {
    id: 7,
    imgURL: "https://image.tmdb.org/t/p/w200/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg",
    title: "Margot Robbie",
    subtitle: "Margot",
  },
  {
    id: 8,
    imgURL: "https://image.tmdb.org/t/p/w200/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg",
    title: "Margot Robbie",
    subtitle: "Margot",
  },
];
const initialRelated: CardListItemModel[] = [
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
];

const Movie: React.FC = () => {
  const { id } = useParams();
  const { moviesService } = useContext(GlobalContext);
  const { setIsLoading } = useApp();

  const [, setMovieId] = useState<number | null>(null);
  const [movie, setMovie] = useState<EntireMovie | null>(null);
  const [directing] = useState<Directing[]>(initialDirecting);
  const [cast] = useState<CardListItemModel[]>(initialCast);
  const [related] = useState<CardListItemModel[]>(initialRelated);
  const [videoKey] = useState<string>("kXolXtsjSF8");

  useEffect(() => {
    if (id) {
      setMovieId(parseInt(id));
      getMovie(parseInt(id)).catch(() => setIsLoading(false));
    }
  }, []);

  const getMovie = async (id: number): Promise<void> => {
    setIsLoading(true);
    const onSuccess = (movie: EntireMovie): void => {
      setMovie(movie);
      setIsLoading(false);
    };

    await moviesService.getMovieById(id, {
      onSuccess,
      onError: () => setIsLoading(false),
    });
  };

  const getGenres = (movie: EntireMovie): string => {
    return movie.genres.map((genre) => genre.name).join(", ");
  };

  const getDuration = (time: number): string => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;

    return `${hours}h ${minutes}m`;
  };

  const getDate = (date: string): string => {
    const parsedDate = new Date(date);
    const day = (parsedDate.getDate() + 1).toString().padStart(2, "0");
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
    const year = parsedDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div data-testid="movie">
      {movie && (
        <Header>
          <Container>
            <ImageWrapper>
              <Image src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
            </ImageWrapper>
            <InfoWrapper>
              <InfoTitle inverted>
                {movie.title} ({new Date(movie.release_date).getFullYear()})
              </InfoTitle>
              <MainInfo>
                16 anos - {getDate(movie.release_date)} (BR) - {getGenres(movie)} -{" "}
                {getDuration(movie.runtime)}
              </MainInfo>
              <Sinopse>Sinopse</Sinopse>
              <Value>{movie.overview}</Value>
              <DirectingContainer>
                {directing.map((item) => (
                  <DirectingItem key={item.id}>
                    <Label>{item.name}</Label>
                    <Value>{item.role}</Value>
                  </DirectingItem>
                ))}
              </DirectingContainer>
            </InfoWrapper>
          </Container>
        </Header>
      )}
      <Container>
        <MediaWrapper>
          <Title>Elenco</Title>
          <CardList size={CardSize.sm} horizontal={true} scroll={true} list={cast} />
          <Title>Trailer</Title>
          <Video videoKey={videoKey} />
          <Title>Recomendações</Title>
          <CardList size={CardSize.sm} list={related} />
        </MediaWrapper>
      </Container>
    </div>
  );
};

export default Movie;

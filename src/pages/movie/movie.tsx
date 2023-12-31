import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CardList } from "~/components/card-list/card-list";
import { CardListItemModel, CardSize } from "~/components/card-list/types";
import { Progress } from "~/components/progress/progress";
import { Video as VideoComponent } from "~/components/video/video";
import { CastResponseType, Pagination } from "~/data/services/movies/types";
import { EntireMovie } from "~/entities/entire-movie";
import { PartialMovie } from "~/entities/partial-movie";
import { Video } from "~/entities/video";
import {
  Container,
  DirectingContainer,
  DirectingItem,
  Header,
  Image,
  ImageWrapper,
  InfoContainer,
  InfoTitle,
  InfoWrapper,
  Label,
  MainInfo,
  MediaWrapper,
  ProgressDescription,
  ProgressWrapper,
  Sinopse,
  Title,
  Value,
} from "~/pages/movie/movie.styles";
import { useApp } from "~/state/app/hook";
import GlobalContext from "~/state/global/context";

type Directing = {
  id: number;
  name: string;
  role: string;
};

// eslint-disable-next-line max-lines-per-function
const Movie: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { moviesService } = useContext(GlobalContext);
  const { setIsLoading } = useApp();

  const [movieId, setMovieId] = useState<number | null>(null);
  const [movie, setMovie] = useState<EntireMovie | null>(null);
  const [directing, setDirecting] = useState<Directing[]>([]);
  const [cast, setCast] = useState<CardListItemModel[]>([]);
  const [recommendations, setRecommendations] = useState<CardListItemModel[]>([]);
  const [videoKey, setVideoKey] = useState<string>("");

  useEffect(() => {
    if (id) {
      setMovieId(parseInt(id));
    }
  }, [id]);

  useEffect(() => {
    Promise.all([getMovie(), getRecommendations(), getCasts(), getVideos()]).catch(() =>
      setIsLoading(false)
    );
  }, [movieId]);

  const getRecommendations = async (): Promise<void> => {
    if (!movieId) return;

    await moviesService.getRecommendations(movieId, {
      onSuccess: onMoviesSuccess,
      onError: () => {},
    });
  };

  const onMoviesSuccess = (movies: Pagination<PartialMovie>): void => {
    const parsedRecommendationsPagination: CardListItemModel[] = movies.results
      .slice(0, 6)
      .map((movie) => ({
        id: movie.id,
        imgURL: `${process.env.MOVIES_IMAGES_URL}/w200${movie.poster_path}`,
        title: movie.title,
        subtitle: movie.release_date,
      }));

    setRecommendations(parsedRecommendationsPagination);
    setIsLoading(false);
  };

  const getMovie = async (): Promise<void> => {
    if (!movieId) return;

    setIsLoading(true);
    const onSuccess = (movie: EntireMovie): void => {
      setMovie(movie);
      setIsLoading(false);
    };

    await moviesService.getMovieById(movieId, {
      onSuccess,
      onError: () => setIsLoading(false),
    });
  };

  const getGenres = (movie: EntireMovie): string => {
    return movie.genres.map((genre) => genre.name).join(", ");
  };

  const getCasts = async (): Promise<void> => {
    if (!movieId) return;

    setIsLoading(true);
    const onSuccess = (cast: CastResponseType): void => {
      const parsedCast: CardListItemModel[] = cast.cast
        .filter((item) => item.profile_path !== null)
        .map((item) => ({
          id: item.id,
          imgURL: `${process.env.MOVIES_IMAGES_URL}/w200${item.profile_path ?? ""}`,
          title: item.name,
          subtitle: item.character,
        }));

      const parsedCrew: Directing[] = cast.crew.slice(0, 5).map((item) => ({
        id: item.id,
        name: item.name,
        role: item.job,
      }));

      setCast(parsedCast);
      setDirecting(parsedCrew);
      setIsLoading(false);
    };

    await moviesService.getCast(movieId, {
      onSuccess,
      onError: () => setIsLoading(false),
    });
  };

  const getVideos = async (): Promise<void> => {
    if (!movieId) return;

    const onSuccess = (videos: Video[]): void => {
      const key = videos.find((video) => video.type === "Trailer")?.key;

      setVideoKey(key ?? "");
    };

    await moviesService.getVideos(movieId, {
      onSuccess,
      onError: () => {},
    });
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
            <InfoContainer>
              <ImageWrapper>
                <Image src={`${process.env.MOVIES_IMAGES_URL}/w300/${movie.poster_path}`} />
              </ImageWrapper>
              <InfoWrapper>
                <InfoTitle inverted>
                  {movie.title} ({new Date(movie.release_date).getFullYear()})
                </InfoTitle>
                <MainInfo>
                  16 anos - {getDate(movie.release_date)} (BR) - {getGenres(movie)} -{" "}
                  {getDuration(movie.runtime)}
                </MainInfo>
                <ProgressWrapper>
                  <Progress value={60} text={`${Math.floor(movie.vote_average * 10)}`} />
                  <ProgressDescription>Avaliação dos usuários</ProgressDescription>
                </ProgressWrapper>
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
            </InfoContainer>
          </Container>
        </Header>
      )}
      <Container>
        <MediaWrapper>
          <Title>Elenco original</Title>
          <CardList size={CardSize.sm} horizontal={true} scroll={true} list={cast} />
          <Title>Trailer</Title>
          <VideoComponent videoKey={videoKey} />
          <Title>Recomendações</Title>
          <CardList
            hasDateSubtitle={true}
            onCardClick={(item) => navigate(`/movies/${item.id}`)}
            size={CardSize.sm}
            list={recommendations}
          />
        </MediaWrapper>
      </Container>
    </div>
  );
};

export default Movie;

import { useState } from "react";

import { CardList } from "~/components/card-list/card-list";
import { CardListItemModel, CardSize } from "~/components/card-list/types";
import { Title } from "~/components/title/title.styles";
import { Video } from "~/components/video/video";
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

type Directing = {
  name: string;
  role: string;
};
const initialDirecting: Directing[] = [
  {
    name: "Will Smith",
    role: "Director",
  },
  {
    name: "Will Smith",
    role: "Director",
  },
  {
    name: "Will Smith",
    role: "Director",
  },
  {
    name: "Will Smith",
    role: "Director",
  },
  {
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
  const [directing] = useState<Directing[]>(initialDirecting);
  const [cast] = useState<CardListItemModel[]>(initialCast);
  const [related] = useState<CardListItemModel[]>(initialRelated);
  const [videoKey] = useState<string>("kXolXtsjSF8");

  return (
    <div data-testid="movie">
      <Header>
        <Container>
          <ImageWrapper>
            <Image src="https://image.tmdb.org/t/p/w300/NNxYkU70HPurnNCSiCjYAmacwm.jpg" />
          </ImageWrapper>
          <InfoWrapper>
            <InfoTitle inverted>Mission: Impossible (2023)</InfoTitle>
            <MainInfo>
              16 anos - 10/10/2023 (BR) - Ação, Aventura, Ficção científica - 2h 10m
            </MainInfo>
            <Sinopse>Sinopse</Sinopse>
            <Value>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </Value>
            <DirectingContainer>
              {directing.map((item) => (
                <DirectingItem key={item.name}>
                  <Label>{item.name}</Label>
                  <Value>{item.role}</Value>
                </DirectingItem>
              ))}
            </DirectingContainer>
          </InfoWrapper>
        </Container>
      </Header>
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

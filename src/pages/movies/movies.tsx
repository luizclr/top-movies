import { useState } from "react";

import { CardList } from "~/components/card-list/card-list";
import { CardListItemModel } from "~/components/card-list/types";
import { Container } from "~/components/container/container";
import { Description, FilterContainer, List, ListItem, Text } from "~/pages/movies/movies.styles";

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

const items: string[] = ["first", "second", "third"];

const Movies: React.FC = () => {
  const [movies] = useState<CardListItemModel[]>(initialState);
  const [selected, setSelected] = useState<string>("second");

  return (
    <div data-testid="movies">
      <FilterContainer>
        <Container>
          <Description>Milhões de filmes, séries e pessoas para descobrir. Explore já.</Description>
          <Text>FILTRE POR:</Text>
          <List>
            {items.map((item) => (
              <ListItem
                key={item}
                onClick={() => {
                  setSelected(item);
                }}
                selected={selected === item}
              >
                {item}
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

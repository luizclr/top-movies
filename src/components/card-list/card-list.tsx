import { ReactElement } from "react";

import {
  CardListItem,
  CardListItemWrapper,
  GridCardList,
  HorizontalCardList,
  Image,
  Subtitle,
  Title,
} from "~/components/card-list/card-list.styles";
import { CardSize, Props } from "~/components/card-list/types";

export const CardList: React.FC<Props> = ({
  list,
  horizontal = false,
  scroll = false,
  size = CardSize.md,
  onCardClick = () => {},
}: Props) => {
  const renderItem = (): ReactElement => {
    return (
      <>
        {list.map((item) => (
          <CardListItemWrapper key={item.id}>
            <CardListItem onClick={() => onCardClick(item)} size={size} scroll={scroll}>
              <Image src={item.imgURL} />
              <Title>{item.title}</Title>
              <Subtitle>{item.subtitle}</Subtitle>
            </CardListItem>
          </CardListItemWrapper>
        ))}
      </>
    );
  };

  return horizontal ? (
    <HorizontalCardList scroll={scroll}>{renderItem()}</HorizontalCardList>
  ) : (
    <GridCardList>{renderItem()}</GridCardList>
  );
};

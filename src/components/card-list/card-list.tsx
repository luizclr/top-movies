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

const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

export const CardList: React.FC<Props> = ({
  list,
  horizontal = false,
  scroll = false,
  size = CardSize.md,
  onCardClick = () => {},
  hasDateSubtitle = false,
}: Props) => {
  const renderItem = (): ReactElement => {
    const formatDate = (date: string): string => {
      const dateObject = new Date(date);

      return `${dateObject.getDate()} ${months[dateObject.getMonth()]} ${dateObject.getFullYear()}`;
    };

    return (
      <>
        {list.map((item) => (
          <CardListItemWrapper key={item.id}>
            <CardListItem onClick={() => onCardClick(item)} size={size} scroll={scroll}>
              <Image src={item.imgURL} />
              <Title>{item.title}</Title>
              <Subtitle>{hasDateSubtitle ? formatDate(item.subtitle) : item.subtitle}</Subtitle>
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

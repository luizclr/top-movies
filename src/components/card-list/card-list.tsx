import {
  BaseCardList,
  CardListItem,
  CardListItemWrapper,
  Image,
  Subtitle,
  Title,
} from "~/components/card-list/card-list.styles";
import { Props } from "~/components/card-list/types";

export const CardList: React.FC<Props> = ({ list }: Props) => (
  <BaseCardList>
    {list.map((item) => (
      <CardListItemWrapper key={item.id}>
        <CardListItem>
          <Image src={item.imgURL} />
          <Title>{item.title}</Title>
          <Subtitle>{item.subtitle}</Subtitle>
        </CardListItem>
      </CardListItemWrapper>
    ))}
  </BaseCardList>
);

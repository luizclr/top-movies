export type CardListItemModel = {
  id: number;
  imgURL: string;
  title: string;
  subtitle: string;
};

export type Props = {
  list: CardListItemModel[];
};

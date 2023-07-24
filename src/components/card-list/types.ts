export type CardListItemModel = {
  id: number;
  imgURL: string;
  title: string;
  subtitle: string;
};

export enum CardSize {
  sm = "SM",
  md = "MD",
  lg = "LG",
}

export type Props = {
  list: CardListItemModel[];
  onCardClick?: (item: CardListItemModel) => void;
  horizontal?: boolean;
  scroll?: boolean;
  size?: CardSize;
};

import { getColorByTheme, getFontWeight, getSize } from "react-styled-guide";
import styled, { css } from "styled-components";

import { CardSize } from "~/components/card-list/types";

const getCardSize = (size: CardSize): string => {
  if (size === CardSize.sm) return "150px";
  if (size === CardSize.md) return "200px";
  return "250px";
};

export const HorizontalCardList = styled.ul<{ scroll: boolean }>`
  list-style-type: none;
  display: flex;
  width: calc(100vw - ${getSize(({ xs }) => xs)});
  max-width: 1200px;
  flex-wrap: ${({ scroll }) => (!scroll ? "wrap" : "none")};
  overflow-x: ${({ scroll }) => (scroll ? "scroll" : "none")};
  padding: ${getSize(({ xxxs }) => xxxs)} 0;
`;

export const GridCardList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
`;

export const CardListItemWrapper = styled.li`
  justify-self: center;
`;

const CardListItemNotScrolled = css<{ size: CardSize }>`
  margin: ${getSize(({ nano }) => nano)};
  max-width: ${({ size }) => getCardSize(size)};
`;

const CardListItemScrolled = css<{ size: CardSize }>`
  margin-right: ${getSize(({ xxs }) => xxs)};
  width: ${({ size }) => getCardSize(size)};
`;

export const CardListItem = styled.div<{ scroll: boolean; size: CardSize }>`
  ${({ scroll }) => (scroll ? CardListItemScrolled : CardListItemNotScrolled)}

  :hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  border-radius: ${getSize(({ nano }) => nano)};
  width: 100%;
  max-width: 200px;
`;

export const Title = styled.p`
  font-weight: ${getFontWeight(({ bold }) => bold)};
  margin: ${getSize(({ quark }) => quark)} 0;
  color: ${getColorByTheme(
    ({ neutral }) => neutral.darker,
    ({ neutral }) => neutral.lighter
  )};
`;

export const Subtitle = styled.span`
  color: ${getColorByTheme(
    ({ neutral }) => neutral.tinyDark,
    ({ neutral }) => neutral.tinyLight
  )};
`;

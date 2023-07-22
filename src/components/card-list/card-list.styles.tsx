import { getColorByTheme, getFontWeight, getSize } from "react-styled-guide";
import styled from "styled-components";

export const BaseCardList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
`;

export const CardListItemWrapper = styled.li`
  justify-self: center;
`;

export const CardListItem = styled.div`
  margin: ${getSize(({ xxs }) => xxs)};
  max-width: 200px;
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

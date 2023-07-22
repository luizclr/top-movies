import { getColorByTheme, getFontSize, getFontWeight, getSize } from "react-styled-guide";
import styled from "styled-components";

export const FilterContainer = styled.div`
  background-color: ${getColorByTheme(
    ({ primary }) => primary.darkest,
    ({ neutral }) => neutral.darker
  )};
  border-bottom: 1px solid
    ${getColorByTheme(
      ({ primary }) => primary.darkest,
      ({ neutral }) => neutral.darker
    )};
  color: ${getColorByTheme(
    ({ neutral }) => neutral.lightest,
    ({ neutral }) => neutral.darkest
  )};
  padding: ${getSize(({ m }) => m)} 0;
`;

export const Description = styled.p`
  margin-left: 0 ${getSize(({ xxxs }) => xxxs)};
  font-size: ${getFontSize(({ xxxl }) => xxxl)};
  font-weight: ${getFontWeight(({ medium }) => medium)};
  max-width: 70%;
  display: flex;
  align-self: center;
  text-align: center;

  @media (max-width: 700px) {
    max-width: 100%;
  }
`;

export const Text = styled.p`
  font-size: ${getFontSize(({ s }) => s)};
  font-weight: ${getFontWeight(({ medium }) => medium)};
  padding-top: ${getSize(({ s }) => s)};
  text-align: center;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ListItem = styled.li<{ selected: boolean }>`
  font-weight: ${getFontWeight(({ medium }) => medium)};
  border-radius: ${getSize(({ quark }) => quark)};
  padding: ${getSize(({ nano }) => nano)};
  margin: ${getSize(({ nano }) => nano)};
  color: ${({ selected }) =>
    selected
      ? getColorByTheme(
          ({ neutral }) => neutral.lightest,
          ({ neutral }) => neutral.darkest
        )
      : getColorByTheme(
          ({ neutral }) => neutral.darkest,
          ({ neutral }) => neutral.lightest
        )};
  background-color: ${({ selected }) =>
    selected
      ? getColorByTheme(
          ({ warning }) => warning.tinyDark,
          ({ neutral }) => neutral.lightest
        )
      : getColorByTheme(
          ({ neutral }) => neutral.lightest,
          ({ neutral }) => neutral.dark
        )};

  :hover {
    cursor: pointer;
    background-color: ${getColorByTheme(
      ({ warning }) => warning.tinyDark,
      ({ neutral }) => neutral.medium
    )};
    color: ${getColorByTheme(
      ({ neutral }) => neutral.lightest,
      ({ neutral }) => neutral.dark
    )};
  }

  :last-child {
    border: none;
  }
`;

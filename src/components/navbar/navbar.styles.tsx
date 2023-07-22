import { getColor, getColorByTheme, getFontSize, getFontWeight, getSize } from "react-styled-guide";
import styled from "styled-components";

import { BaseContainer } from "~/components/container/container.styles";

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  color: ${getColor(({ neutral }) => neutral.lightest)};
`;

export const TopSection = styled.div`
  width: 100%;
  background-color: ${getColorByTheme(
    ({ primary }) => primary.medium,
    ({ neutral }) => neutral.darker
  )};
  border-bottom: 1px solid
    ${getColorByTheme(
      ({ primary }) => primary.darkest,
      ({ neutral }) => neutral.dark
    )};
`;

export const TopContainer = styled(BaseContainer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: ${getFontSize(({ m }) => m)};
  font-weight: ${getFontWeight(({ medium }) => medium)};
`;

export const ActionsWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  direction: row;
`;

export const ActionItem = styled.li`
  font-size: ${getFontSize(({ m }) => m)};
  font-weight: ${getFontWeight(({ medium }) => medium)};
  padding: ${getSize(({ xxxs }) => xxxs)};

  :hover {
    cursor: pointer;
    background-color: ${getColorByTheme(
      ({ primary }) => primary.darker,
      ({ neutral }) => neutral.dark
    )};
  }

  :last-child {
    border: none;
  }
`;

export const BottomSection = styled.div`
  width: 100%;
  background-color: ${getColorByTheme(
    ({ primary }) => primary.darkest,
    ({ neutral }) => neutral.darker
  )};
  border-bottom: 1px solid
    ${getColorByTheme(
      ({ primary }) => primary.darkest,
      ({ neutral }) => neutral.darker
    )};
`;

export const BottomContainer = styled(BaseContainer)`
  display: flex;
  align-items: center;
  padding: ${getSize(({ m }) => m)} 0;
  text-align: center;
`;

export const Description = styled.p`
  margin-left: 0 ${getSize(({ xxxs }) => xxxs)};
  font-size: ${getFontSize(({ xxxl }) => xxxl)};
  font-weight: ${getFontWeight(({ medium }) => medium)};
  max-width: 70%;

  @media (max-width: 700px) {
    max-width: 100%;
  }
`;

export const Text = styled.p`
  margin-left: 0 ${getSize(({ xxxs }) => xxxs)};
  font-size: ${getFontSize(({ s }) => s)};
  font-weight: ${getFontWeight(({ medium }) => medium)};
  padding-top: ${getSize(({ s }) => s)};
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

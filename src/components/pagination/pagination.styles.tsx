import ReactPaginate from "react-paginate";
import { getColor, getColorByTheme, getSize } from "react-styled-guide";
import styled from "styled-components";

export const Pagination = styled(ReactPaginate).attrs({
  activeClassName: "active",
})`
  margin: ${getSize(({ xxs }) => xxs)};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;

  li {
    margin: ${getSize(({ nano }) => nano)} ${getSize(({ quark }) => quark)};
  }

  li a {
    border-radius: ${getSize(({ quark }) => quark)};
    padding: ${getSize(({ quark }) => quark)} ${getSize(({ xxxs }) => xxxs)};
    color: ${getColorByTheme(
      ({ primary }) => primary.darkest,
      ({ neutral }) => neutral.lightest
    )};
    cursor: pointer;

    :hover {
      background-color: ${getColorByTheme(
        ({ primary }) => primary.darkest,
        ({ neutral }) => neutral.dark
      )};
      color: ${getColor(({ neutral }) => neutral.lightest)};
    }
  }

  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }

  li.active a {
    background-color: ${getColorByTheme(
      ({ primary }) => primary.darkest,
      ({ neutral }) => neutral.dark
    )};
    border-color: transparent;
    color: ${getColor(({ neutral }) => neutral.lightest)};
  }

  li.disabled a {
    color: ${getColor(({ neutral }) => neutral.medium)};

    :hover {
      background-color: ${getColor(({ neutral }) => neutral.lightest)};
    }
  }

  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

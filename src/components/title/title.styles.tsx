import { getColorByTheme, getFontSize } from "react-styled-guide";
import styled from "styled-components";

export const Title = styled.h1<{ inverted?: boolean }>`
  font-size: ${getFontSize(({ xxl }) => xxl)};
  color: ${({ inverted }) =>
    getColorByTheme(
      ({ neutral }) => (inverted ? neutral.lightest : neutral.darkest),
      ({ neutral }) => (inverted ? neutral.darkest : neutral.lightest)
    )};
`;

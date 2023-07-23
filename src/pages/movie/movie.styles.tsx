import { getColor, getColorByTheme, getFontSize, getFontWeight, getSize } from "react-styled-guide";
import styled from "styled-components";

import { BaseContainer } from "~/components/container/container.styles";
import { Title as BaseTitle } from "~/components/title/title.styles";

export const Header = styled.div`
  background-color: ${getColorByTheme(
    ({ primary }) => primary.darkest,
    ({ neutral }) => neutral.darker
  )};
  color: ${getColor(({ neutral }) => neutral.lightest)};
  padding: ${getSize(({ m }) => m)} 0;
  margin-bottom: 100px;
`;

export const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: row;
`;

export const ImageWrapper = styled.div`
  background-color: inherit;
  min-height: 300px;
`;

export const Image = styled.img`
  margin-bottom: -120px;
  border-radius: ${getSize(({ nano }) => nano)};
`;

export const InfoWrapper = styled.div`
  background-color: inherit;
  padding: 0 ${getSize(({ xs }) => xs)};
`;

export const InfoTitle = styled(BaseTitle)`
  color: ${getColor(({ neutral }) => neutral.lightest)};
`;

export const MainInfo = styled.p`
  font-size: ${getFontSize(({ m }) => m)};
`;

export const DirectingContainer = styled.div`
  background-color: inherit;
  display: flex;
  flex-wrap: wrap;
`;

export const DirectingItem = styled.div`
  background-color: inherit;
  width: 100%;
  max-width: 250px;

  @media (max-width: 1000px) {
    max-width: 150px;
  }
`;

export const Label = styled.p`
  margin-top: ${getSize(({ xxxs }) => xxxs)};
  font-weight: ${getFontWeight(({ bold }) => bold)};
`;

export const Sinopse = styled(Label)`
  font-size: ${getFontSize(({ m }) => m)};
`;

export const Value = styled.p`
  margin-top: ${getSize(({ quark }) => quark)};
  width: 100%;
`;

export const MediaWrapper = styled.div`
  margin-bottom: ${getSize(({ l }) => l)} 0;
`;

import { getSize } from "react-styled-guide";
import styled from "styled-components";

export const BaseVideo = styled.div`
  max-width: 800px;
  max-height: 452px;
  margin-top: ${getSize(({ xxxs }) => xxxs)};
`;

export const IFrameContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%;
`;

export const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

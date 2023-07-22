import { getSize } from "react-styled-guide";
import styled from "styled-components";

export const BaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
`;

export const BaseContent = styled.div`
  width: 100%;
  height: 100%;
  padding: ${getSize(({ xxs }) => xxs)};
`;

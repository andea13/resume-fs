import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  opacity: 0;
  animation: ${fadeIn} 0.5s forwards;
  ${({ delay }) =>
    css`
      animation-delay: ${delay}s;
    `}
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

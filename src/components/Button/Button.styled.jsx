import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)`
  background-color: #ffc500;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 50px;
  padding: 1px 12px;
  line-height: 35px;
  min-width: 100px;
  outline: none;

  color: #000;

  text-transform: none;

  margin: 20px 0;
  &:hover {
    background-color: #eeeeee;
  }
  &.filterButton {
    border-radius: 4px;
    background-color: #eee;
    &:hover {
      background-color: #ffc500;
    }
    &:active {
      background-color: #ffc500;
    }
  }
`;

export const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  //   margin-top: 20px;
`;

export const StyledButtonIconContainer = styled.div`
  color: #000;
  background-color: #fff;
  border-radius: 50px;
  height: 27px;
  width: 27px;
  line-height: 29px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButtonText = styled.span`
  font-size: 14px;
  text-transform: none;
  text-align: center;
  width: 100%;
  margin-left: 5px;
  margin-right: 5px;
`;

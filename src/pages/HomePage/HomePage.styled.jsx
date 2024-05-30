import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const StyledHomePage = styled.div`
  border-radius: 6px;
  padding: 20px;
  box-shadow: 1px -3px 3px rgba(0, 0, 0, 0.3);
  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
    column-gap: 20px;
    align-items: center;
  }
`;

export const StyledHomePageContainer = styled(Grid)`
  &.MuiGrid-container {
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    column-gap: 20px;
  }
`;

export const StyledHomePageItem = styled(Grid)`
  &.MuiGrid-item {
  }
`;

export const StyledTechSkillsItem = styled(Grid)`
  &.MuiGrid-item {
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 12px;
    box-shadow: -4px 6px 12px rgba(0, 0, 0, 0.3);
  }
`;
export const StyledPersonalSkillsItem = styled(Grid)`
  &.MuiGrid-item {
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 12px;
    box-shadow: 2px 0px 20px 0px rgba(0, 0, 0, 0.3);
`;

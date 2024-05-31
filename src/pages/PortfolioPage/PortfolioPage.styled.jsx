import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const StyledPortfolioPage = styled.div`
  border-radius: 6px;
  padding: 20px;
  box-shadow: 1px -3px 3px rgba(0, 0, 0, 0.3);
  @media (min-width: 900px) {
    display: flex;

    align-items: center;
  }
`;

export const StyledPortfolioPageContainer = styled(Grid)`
&.MuiGrid-container {
background-color: green,
box-shadow: 1px -3px 3px rgba(0, 0, 0, 0.3);
`;

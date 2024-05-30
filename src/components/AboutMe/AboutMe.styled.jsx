import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const StyledAboutPageContainer = styled(Grid)`
&.MuiGrid-container {
background-color: green,
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
`;

export const StyledAboutItem = styled(Grid)`
  &.MuiGrid-item {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const StyledAboutItemDescription = styled.p`
  margin-bottom: 10px;
`;

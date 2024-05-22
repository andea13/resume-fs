import styled from "@emotion/styled";
import HomeIcon from "@mui/icons-material/Home";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const HomeIconStyled = styled(HomeIcon)`
display: { xs: none, md: flex },
mr: 1`;

export const HeaderBoxStyled = styled(Box)`
  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  // display: flex:
  // flex-grow: 1;
  // justify-content: { xs: flexEnd, md: none };
`;

export const HeaderStyled = styled(AppBar)`
  background-color: #ffc500;
  color: #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const ButtonStyled = styled(Button)`
  color: #000;
`;

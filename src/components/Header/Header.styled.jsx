import styled from "@emotion/styled";
import HomeIcon from "@mui/icons-material/Home";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Container, IconButton } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled(AppBar)`
  background-color: #ffc500;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const HeaderContainerStyled = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export const ToolbarStyled = styled(Toolbar)`
  display: flex;
  @media (min-width: 900px) {
    justify-content: space-around;
  }

  padding: 0;
`;

export const HeaderBoxStyled = styled(Box)`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const HeaderNavBoxStyled = styled(Box)`
  display: flex;
  column-gap: 20px;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const HeaderSocialBoxStyled = styled(Box)`
  cursor: pointer;

  @media (max-width: 899px) {
    display: none;
  }
  @media (min-width: 900px) {
    display: flex;
  }
`;

export const HeaderSocialLinkStyled = styled(Link)`
  margin-right: 15px;
  &:hover {
    color: #000;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  &:hover {
    font-weight: 500;
     font-size: 16px;
    color: #000;
`;

export const HomeIconStyled = styled(HomeIcon)`
  color: #fff;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    color: #000;
  }
`;

export const MenuIconStyled = styled(IconButton)`
  color: #000;
  @media (min-width: 900px) {
    display: none;
  }
`;

export const TypographyStyled = styled(Typography)`
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
  @media (min-width: 1280px) {
    font-size: 2rem;
  }
`;

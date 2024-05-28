import * as React from "react";
import resumeData from "../../utils/resumeData";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import {
  HomeIconStyled,
  HeaderStyled,
  HeaderBoxStyled,
  MenuIconStyled,
  ToolbarStyled,
  TypographyStyled,
  HeaderNavBoxStyled,
  HeaderSocialBoxStyled,
  HeaderSocialLinkStyled,
  StyledNavLink,
} from "./Header.styled";

const pages = ["Resume", "Portfolio"];

const Header = ({ title, text, link }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <HeaderStyled position="static">
      <Container maxWidth="xl">
        <ToolbarStyled disableGutters>
          {/* <HeaderBoxStyled></HeaderBoxStyled> */}
          <HeaderBoxStyled
            sx={
              {
                // flexGrow: 1,
                // display: { xs: "flex", md: "none" },
                // justifyContent: { xs: "flexEnd", md: "none" },
              }
            }
          >
            <StyledNavLink to="/">
              {" "}
              <HomeIconStyled />
            </StyledNavLink>

            <MenuIconStyled
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </MenuIconStyled>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </HeaderBoxStyled>
          <TypographyStyled
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            // sx={{
            //   mr: 2,
            //   display: { xs: "flex", md: "none" },
            //   flexGrow: 1,
            //   fontFamily: "monospace",
            //   fontWeight: 700,
            //   letterSpacing: ".3rem",
            //   color: "inherit",
            //   textDecoration: "none",
            // }}
          >
            {/* <HomeIconStyled /> */}
          </TypographyStyled>
          <HeaderNavBoxStyled>
            {/* <StyledNavLink to="/">Home</StyledNavLink> */}
            <StyledNavLink to="/resume">Resume</StyledNavLink>
            <StyledNavLink to="/portfolio">Portfolio</StyledNavLink>
          </HeaderNavBoxStyled>
          <HeaderSocialBoxStyled sx={{ display: "flex", alignItems: "center" }}>
            {Object.keys(resumeData.socials).map((key) => (
              <HeaderSocialLinkStyled
                key={nanoid()}
                title={key}
                text={resumeData.socials[key].text}
                href={resumeData.socials[key].link}
                target="_blank"
                color="inherit"
              >
                {resumeData.socials[key].icon}
              </HeaderSocialLinkStyled>
            ))}
          </HeaderSocialBoxStyled>
        </ToolbarStyled>
      </Container>
    </HeaderStyled>
  );
};

export default Header;

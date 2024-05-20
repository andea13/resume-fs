import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { css } from "@emotion/react";

export const StyledContainer = styled(Container)`
  margin-top: 60px;

  @media (max-width: 899px) {
    margin-top: 20px;
  }
`;

export const GridContainerStyled = styled(Grid)(({ theme }) =>
  css({
    display: "flex",
    flexDirection: "column",
    columnGap: "0",
    flexWrap: "nowrap",
    width: "100%",
    margin: 0,
    padding: 0,
    justifyContent: "center",
    "& .MuiGrid-item": {
      display: "flex",
      alignItems: "center",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      columnGap: "20px",
    },
  })
);
export const GridFirstItemStyled = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: 0,
  padding: "40px",
  justifyContent: "center",
  alignItems: "center",
  "& .MuiGrid-item": {
    display: "flex",
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {
    marginBottom: "200px",
  },
}));

export const GridSecondItemStyled = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  // backgroundColor: "yellow",
  padding: "40px",
}));

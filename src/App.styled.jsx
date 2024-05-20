import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { css } from "@emotion/react";

export const StyledContainer = styled(Container)`
  margin-top: 30px;
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
    "@media (min-width: 900px)": {
      padding: "0",
      flexDirection: "row",

      columnGap: "20px",
    },
  })
);
export const GridFirstItemStyled = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginBottom: "20px",
  padding: "0",
  justifyContent: "center",
  alignItems: "center",
  "& .MuiGrid-item": {
    display: "flex",
    justifyContent: "flex-start",
  },

  "@media (min-width: 900px)": {
    marginBottom: "200px",
    margin: "30px 0 60px",
    justifyContent: "flex-start",
  },
}));

export const GridSecondItemStyled = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "0",

  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  backgroundColor: "#fff",
  borderRadius: "6px",

  boxShadow: "0px 2px 92px 0px rgba(0, 0, 0, 0.13)",
  WebkitBoxShadow: "0px 2px 92px 0px rgba(0, 0, 0, 0.13)",
  MozBoxShadow: "0px 2px 92px 0px rgba(0, 0, 0, 0.13)",

  // backgroundColor: "yellow",
  // padding: "40px",
}));

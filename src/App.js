import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  StyledContainer,
  GridContainerStyled,
  GridFirstItemStyled,
  GridSecondItemStyled,
} from "./App.styled";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage/PortfolioPage"));
const ResumePage = lazy(() => import("./pages/ResumePage/ResumePage"));

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 468,
      md: 900,
      lg: 1280,
      xl: 1920,
      custom: 900,
    },
  },
});

function App() {
  const matchesMedium = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <StyledContainer>
      <ThemeProvider theme={theme}>
        <GridContainerStyled container spacing={matchesMedium ? 3 : 0}>
          <GridFirstItemStyled item xs={12} sm={12} md={4}>
            <Profile />
          </GridFirstItemStyled>
          <GridSecondItemStyled item xs={10} sm={12} md={12}>
            <Header style={{ marginBottom: "30px" }} />
            <Grid container direction="column" style={{ width: "100%" }}>
              <Grid item>
                <Suspense>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/resume" element={<ResumePage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                  </Routes>
                </Suspense>
              </Grid>
              <Grid item>
                <Footer />
              </Grid>
            </Grid>
          </GridSecondItemStyled>
        </GridContainerStyled>
      </ThemeProvider>
    </StyledContainer>
  );
}
export default App;

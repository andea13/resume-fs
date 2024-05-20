import { Grid } from "@mui/material";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  StyledContainer,
  GridContainerStyled,
  GridFirstItemStyled,
  GridSecondItemStyled,
} from "./App.styled";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

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
  const matchesSmall = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesMedium = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <StyledContainer>
      <ThemeProvider theme={theme}>
        <GridContainerStyled container spacing={matchesMedium ? 7 : 2}>
          <GridFirstItemStyled item xs={12} sm={12} md={4}>
            <Profile />
          </GridFirstItemStyled>

          <GridSecondItemStyled item xs={12} sm={12} md={8}>
            <Header />
            <Suspense>
              <BrowserRouter basename="/resume-fs">
                <Routes>
                  <Route path="/" element={<ResumePage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                </Routes>
              </BrowserRouter>
            </Suspense>

            <Footer />
          </GridSecondItemStyled>
        </GridContainerStyled>
      </ThemeProvider>
    </StyledContainer>
  );
}
export default App;

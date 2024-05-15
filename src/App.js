import { Container, Grid } from "@mui/material";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const PortfolioPage = lazy(() => import("./pages/PortfolioPage/PortfolioPage"));
const ResumePage = lazy(() => import("./pages/ResumePage/ResumePage"));

function App() {
  return (
    <Container>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4}>
          <Profile />
        </Grid>

        <Grid item xs={false} md={8} style={{ backgroundColor: "yellow" }}>
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
        </Grid>
      </Grid>
    </Container>
  );
}
export default App;

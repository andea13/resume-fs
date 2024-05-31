import PortfolioFilter from "../../components/PortfolioFilter/PortfolioFilter";
import React from "react";
import {
  StyledPortfolioPage,
  StyledPortfolioPageContainer,
} from "./PortfolioPage.styled";
import resumeData from "../../utils/resumeData";
import PortfolioList from "../../components/Portfolio/PortfolioList";
import { Grid } from "@mui/material";

const PortfolioPage = () => {
  return (
    <StyledPortfolioPage>
      <StyledPortfolioPageContainer container>
        <Grid item xs={12} md={12}>
          <PortfolioFilter resumeData={resumeData} />
        </Grid>
        <Grid item xs={12} md={12}>
          <PortfolioList resumeData={resumeData} />
        </Grid>
      </StyledPortfolioPageContainer>
    </StyledPortfolioPage>
  );
};

export default PortfolioPage;

import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import AnimatedList from "../../components/AnimatedList/AnimatedList.jsx";
import { Grid } from "@mui/material";
import resumeData from "../../utils/resumeData.js";

import {
  StyledHomePage,
  StyledTechSkillsItem,
  StyledPersonalSkillsItem,
} from "./HomePage.styled.jsx";
import { StyledItemTitle } from "../ResumePage/ResumePage.styled";

const HomePage = () => {
  const techSkills = resumeData.skills.technical;
  console.log(techSkills);
  const personalSkills = resumeData.skills.personal;
  console.log(personalSkills);
  return (
    <StyledHomePage>
      <Grid container>
        <Grid item>
          <AboutMe />
        </Grid>

        <StyledTechSkillsItem item md={6}>
          <StyledItemTitle>
            <p>Technical skills</p>
            <AnimatedList items={techSkills} />
          </StyledItemTitle>
        </StyledTechSkillsItem>
        <StyledPersonalSkillsItem item md={6}>
          <StyledItemTitle>
            <p>Soft skills</p>
            <AnimatedList items={personalSkills} />
          </StyledItemTitle>
        </StyledPersonalSkillsItem>
      </Grid>
    </StyledHomePage>
  );
};

export default HomePage;

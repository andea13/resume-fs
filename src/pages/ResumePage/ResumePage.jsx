import { Grid } from "@mui/material";
import { nanoid } from "nanoid";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline.jsx";
import AboutMe from "../../components/AboutMe/AboutMe.jsx";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import resumeData from "../../utils/resumeData.js";

import {
  StyledItemTitle,
  StyledResumePage,
  StyledResumePageContainer,
  StyledWorkExperienceItem,
  StyledEducationExperienceItem,
  StyledResumeTimelineContent,
  StyledResumeTimelineTitle,
  StyledResumeTimelineDate,
  StyledResumeTimelineDescription,
} from "./ResumePage.styled";

import { StyledTimelineItem } from "../../components/Timeline/Timeline.styled.jsx";

const ResumePage = () => {
  const { workExperiences, educationExperiences } = resumeData;

  return (
    <StyledResumePage xs={12} md={12}>
      {/* about me */}
      <StyledResumePageContainer container>
        <AboutMe />
      </StyledResumePageContainer>

      {/* education and experiences */}
      <Grid container>
        <Grid item xs={12} md={12}>
          <StyledItemTitle>Resume</StyledItemTitle>
        </Grid>
        <StyledWorkExperienceItem item xs={12} md={6}>
          <CustomTimeline
            title="Work experience"
            icon={<WorkOutlineOutlinedIcon />}
          >
            {workExperiences.map((experience) => (
              <StyledTimelineItem key={nanoid()}>
                <CustomTimelineSeparator />
                <StyledResumeTimelineContent>
                  <StyledResumeTimelineTitle variant="h6" component="span">
                    {experience.title}
                  </StyledResumeTimelineTitle>
                  <StyledResumeTimelineDate variant="caption">
                    {experience.date}
                  </StyledResumeTimelineDate>
                  <StyledResumeTimelineDescription variant="body2">
                    {experience.description}
                  </StyledResumeTimelineDescription>
                </StyledResumeTimelineContent>
              </StyledTimelineItem>
            ))}
          </CustomTimeline>
        </StyledWorkExperienceItem>
        <StyledEducationExperienceItem item xs={12} md={6}>
          <CustomTimeline title="Education" icon={<SchoolOutlinedIcon />}>
            {educationExperiences.map((experience) => (
              <StyledTimelineItem key={nanoid()}>
                <CustomTimelineSeparator />
                <StyledResumeTimelineContent>
                  <StyledResumeTimelineTitle variant="h6" component="span">
                    {experience.title}
                  </StyledResumeTimelineTitle>
                  <StyledResumeTimelineDate variant="caption">
                    {experience.date}
                  </StyledResumeTimelineDate>
                  <StyledResumeTimelineDescription variant="body2">
                    {experience.description}
                  </StyledResumeTimelineDescription>
                </StyledResumeTimelineContent>
              </StyledTimelineItem>
            ))}
          </CustomTimeline>
        </StyledEducationExperienceItem>
      </Grid>

      {/* skills */}
      {/* <Grid container>
        <Grid item>
          <h1>Skills</h1>
        </Grid>
      </Grid> */}
    </StyledResumePage>
  );
};

export default ResumePage;

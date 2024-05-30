import styled from "@emotion/styled";
import { TimelineContent } from "@mui/lab";
import { Typography } from "@mui/material";

import { Grid } from "@mui/material";

export const StyledResumePage = styled.div`
  border-radius: 6px;
  padding: 20px;
  box-shadow: 1px -3px 3px rgba(0, 0, 0, 0.3);
  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
    column-gap: 20px;
    align-items: center;
  }
`;

export const StyledResumePageContainer = styled(Grid)`
&.MuiGrid-container {
background-color: green,
box-shadow: 1px -3px 3px rgba(0, 0, 0, 0.3);
`;

export const StyledWorkExperienceItem = styled(Grid)`
  &.MuiGrid-item {
    display: flex;
    align-items: flex-start;
  }
`;

export const StyledItemTitle = styled.h1`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
`;

export const StyledEducationExperienceItem = styled(Grid)`
  &.MuiGrid-item {
    display: flex;
    align-items: flex-start;
  }
`;

export const StyledResumeTimelineContent = styled(TimelineContent)`
  display: flex;
  flex-direction: column;
  text-align: justify;
`;

export const StyledResumeTimelineTypography = styled(Typography)``;

export const StyledResumeTimelineTitle = styled(Typography)`
  font-size: 16px;
  font-weight: 600px;
`;

export const StyledResumeTimelineDate = styled(Typography)`
  font-size: 12px;
  color: #2f4f4f;
  margin-bottom: 6px;
`;

export const StyledResumeTimelineDescription = styled(Typography)`
  font-size: 14px;
  color: #808080;
`;

export const StyledResumeTimelineItem = styled(Grid)`
  min-height: 0px;
  &.MuiTimelineItem-missingOppositeContent {
    min-height: 50px;
  }
  &::before {
    display: none;
  }
`;

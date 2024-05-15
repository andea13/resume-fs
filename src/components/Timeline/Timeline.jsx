import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";

import {
  StyledSeparator,
  StyledTimelineItem,
  StyledTimelineDot,
  StyledTimelineConnector,
  StyledTimelineTypography,
  StyledCustomSeparatorDot,
  StyledCustomSeparatorConnector,
} from "./Timeline.styled";

const CustomTimeline = ({ title, children, icon }) => {
  return (
    <Timeline>
      {/* header item */}
      <StyledTimelineItem>
        <StyledSeparator>
          <StyledTimelineDot variant="outlined">{icon}</StyledTimelineDot>
          <StyledTimelineConnector />
        </StyledSeparator>
        <TimelineContent>
          <StyledTimelineTypography>{title}</StyledTimelineTypography>
        </TimelineContent>
      </StyledTimelineItem>
      {children}
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => {
  return (
    <TimelineSeparator>
      <StyledCustomSeparatorDot />
      <StyledCustomSeparatorConnector />
    </TimelineSeparator>
  );
};

export default CustomTimeline;

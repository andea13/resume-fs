import styled from "@emotion/styled";
import { TimelineSeparator } from "@mui/lab";
import { TimelineItem } from "@mui/lab";
import { TimelineDot } from "@mui/lab";
import { TimelineConnector } from "@mui/lab";
import { TimelineContent } from "@mui/lab";
import { Typography } from "@mui/material";

export const StyledSeparator = styled(TimelineSeparator)`
  span {
    min-height: 20px;
    border-style: none;
    margin-left: -10px;
  }
`;

export const StyledTimelineItem = styled(TimelineItem)`
  min-height: 0px;
  &.MuiTimelineItem-missingOppositeContent {
    min-height: 50px;
  }
  &::before {
    display: none;
  }
`;

export const StyledTimelineDot = styled(TimelineDot)`
  background-color: #ffc500;
  border-style: none;
  margin-left: -10px;
`;

export const StyledTimelineConnector = styled(TimelineConnector)`
  width: 2px;
  min-height: 20px;
  background-color: #eee;
  margin-left: -10px;
`;

export const StyledTimelineContent = styled(TimelineContent)`
  margin-top: 2px;
  margin-bottom: 12px;
`;

export const StyledCustomSeparatorDot = styled(TimelineDot)`
  && {
    background-color: #fff;
    border-color: #ffc500;
  }
`;

export const StyledCustomSeparatorConnector = styled(TimelineConnector)`
  && {
    width: 2px;
    min-height: 20px;
    background-color: #eee;
  }
`;

export const StyledTimelineTypography = styled(TimelineContent)`
  // padding: 0px;
`;

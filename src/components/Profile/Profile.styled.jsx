import styled from "@emotion/styled";
import { TimelineItem } from "@mui/lab";

export const StyledCustomTimelineItem = styled(TimelineItem)`
  &.MuiTimelineItem-missingOppositeContent {
    min-height: 50px;
  }
  &.MuiTimelineItem-missingOppositeContent:before {
    content: none;
  }
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  padding: 0;
  display: inline-block;
  background-color: #fff;
  border-radius: 6px;

  box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.13);
  -webkit-box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.13);
`;
export const ProfileIntro = styled.div`
  padding: 0;
`;

export const ProfileImageWrapper = styled.figure`
  padding: 0;
`;

export const ProfileImage = styled.img`
  width: 100%;
  border-radius: 3px 3px 3px 3px;
  padding: 0;
  margin-top: -10px;
  -webkit-clip-path: polygon(0 9%, 100% 0, 100% 94%, 0 100%);
  clip-path: polygon(0 9%, 100% 0, 100% 94%, 0 100%);
`;

export const ProfileInfo = styled.div`
  top: 0;
  left: 0;
  margin-top: -65px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ProfileName = styled.h1`
  line-height: 18px;
  padding: 20;
  text-transform: uppercase;
  font-size: 17px;
  font-weight: 700;
`;

export const ProfileTitle = styled.h2`
  padding: 0;
  font-size: 13 px;
  color: #777;
`;

export const CustomTimelineTitle = styled.span`
  color: #000;
  font-size: 15px;
`;

export const CustomTimelineText = styled.span`
  color: #787878;
  font-size: 14px;
  font-weight: 400;
`;

export const CustomTimelineLink = styled.a`
  color: #787878;
  font-size: 14px;
  text-decoration: none;
`;

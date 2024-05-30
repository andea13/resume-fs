import resumeData from "../../utils/resumeData.js";

import { StyledAboutItem, StyledAboutItemDescription } from "./AboutMe.styled";
import { StyledItemTitle } from "../../pages/ResumePage/ResumePage.styled";

const AboutMe = () => {
  const { about } = resumeData;

  return (
    <StyledAboutItem item>
      <StyledItemTitle>About me</StyledItemTitle>
      <StyledAboutItemDescription>{about}</StyledAboutItemDescription>
    </StyledAboutItem>
  );
};

export default AboutMe;

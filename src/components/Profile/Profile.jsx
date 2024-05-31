import * as React from "react";
import { nanoid } from "nanoid";
import CustomButton from "../Button/Button";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import TimelineContent from "@mui/lab/TimelineContent";

import GetAppIcon from "@mui/icons-material/GetApp";
import profileImage from "../../assets/images/photo_2024-05-31_13-22-24.jpg";
import resumeData from "../../utils/resumeData";

import {
  ProfileWrapper,
  ProfileIntro,
  ProfileImageWrapper,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  ProfileTitle,
  CustomTimelineTitle,
  CustomTimelineText,
  CustomTimelineLink,
  StyledCustomTimelineItem,
} from "./Profile.styled.jsx";
import { Typography } from "@mui/material";
import { PersonOutlineOutlined } from "@mui/icons-material";

const CustomTimelineItem = ({ title, text, link }) => (
  <StyledCustomTimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent>
      {link ? (
        <>
          <CustomTimelineTitle>{title}</CustomTimelineTitle> :{" "}
          <CustomTimelineLink href={link} target="_blank" rel="noreferrer">
            {text}
          </CustomTimelineLink>
        </>
      ) : (
        <>
          <CustomTimelineTitle>{title}</CustomTimelineTitle> :{" "}
          <CustomTimelineText>{text}</CustomTimelineText>
        </>
      )}
    </TimelineContent>
  </StyledCustomTimelineItem>
);

const Profile = () => {
  const { name, title, email, age } = resumeData;
  return (
    <ProfileWrapper className="container_shadow">
      <ProfileIntro>
        <ProfileName>
          <Typography>{name}</Typography>
        </ProfileName>
        <ProfileTitle>
          <Typography>{title}</Typography>
        </ProfileTitle>
      </ProfileIntro>

      <ProfileImageWrapper>
        <ProfileImage src={profileImage} alt="profile" />
      </ProfileImageWrapper>
      <br />
      <ProfileInfo>
        <CustomTimeline icon={<PersonOutlineOutlined />}>
          <CustomTimelineItem title="Name" text={name} />
          <CustomTimelineItem title="Title" text={title} />
          <CustomTimelineItem title="Age" text={age} />
          <CustomTimelineItem title="Email" text={email} />
          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
              key={nanoid()}
            />
          ))}
        </CustomTimeline>
      </ProfileInfo>
      <CustomButton text={" Download CV"} icon={<GetAppIcon />}></CustomButton>
    </ProfileWrapper>
  );
};
export default Profile;

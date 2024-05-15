import * as React from "react";
import { nanoid } from "nanoid";
import Button from "@mui/material/Button";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";

import Icon from "@mdi/react";
import { mdiDownload } from "@mdi/js";
import profileImage from "../../assets/images/resume.JPG";
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
} from "./Profile.styled";
import { Typography } from "@mui/material";
import { PersonOutlineOutlined } from "@mui/icons-material";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem
    sx={{
      minHeight: "0px",
      "&::before": {
        display: "none",
      },
    }}
  >
    <CustomTimelineSeparator />
    <TimelineContent>
      {link ? (
        <Typography sx={{ padding: "10px" }}>
          <CustomTimelineTitle>{title}</CustomTimelineTitle> :{" "}
          <CustomTimelineLink href={link} target="_blank" rel="noreferrer">
            {text}
          </CustomTimelineLink>
        </Typography>
      ) : (
        <Typography sx={{ padding: "10px" }}>
          <CustomTimelineTitle>{title}</CustomTimelineTitle> :{" "}
          <CustomTimelineText>{text}</CustomTimelineText>
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  const { name, title, email, age } = resumeData;
  return (
    <ProfileWrapper>
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
      <Button>
        Download CV <Icon path={mdiDownload} size={1} />
      </Button>
    </ProfileWrapper>
  );
};
export default Profile;

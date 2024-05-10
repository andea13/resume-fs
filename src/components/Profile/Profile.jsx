import * as React from "react";
import Button from "@mui/material/Button";
import { CustomTimeline } from "../Timeline/Timeline";
import Icon from "@mdi/react";
import { mdiDownload } from "@mdi/js";
import profileImage from "../../assets/images/resume.JPG";

import {
  ProfileWrapper,
  ProfileIntro,
  ProfileImageWrapper,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  ProfileTitle,
} from "./Profile.styled";
import { Typography } from "@mui/material";
const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileIntro>
        <ProfileName>
          <Typography>Oksana Dziuba</Typography>
        </ProfileName>
        <ProfileTitle>
          <Typography>Full Stack Developer</Typography>
        </ProfileTitle>
      </ProfileIntro>

      <ProfileImageWrapper>
        <ProfileImage src={profileImage} alt="profile" />
      </ProfileImageWrapper>
      <br />
      <ProfileInfo>
        <CustomTimeline />
      </ProfileInfo>
      <Button>
        Download CV <Icon path={mdiDownload} size={1} />
      </Button>
    </ProfileWrapper>
  );
};
export default Profile;

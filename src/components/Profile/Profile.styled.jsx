import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  width: 100%;
  padding: 0;
  display: inline-block;
  background-color: #fff;
  border-radius: 6px;
`;
export const ProfileIntro = styled.div`
  padding: 0;
`;

export const ProfileImageWrapper = styled.figure`
  padding: 0;
`;

export const ProfileImage = styled.img`
  width: 100%;
  border-radius: 6px 6px 0 0;
  padding: 0;
  margin-top: -10px;
  -webkit-clip-path: polygon(0 9%, 100% 0, 100% 94%, 0 100%);
  clip-path: polygon(0 9%, 100% 0, 100% 94%, 0 100%);
`;

export const ProfileInfo = styled.div`
  padding: 0;
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

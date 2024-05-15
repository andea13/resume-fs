import {
  StyledButton,
  StyledButtonContainer,
  StyledButtonIconContainer,
  StyledButtonText,
} from "./Button.styled";

const CustomButton = ({ text, icon }) => {
  return (
    <StyledButtonContainer>
      <StyledButton
        variant="contained"
        endIcon={
          icon ? (
            <StyledButtonIconContainer>{icon}</StyledButtonIconContainer>
          ) : null
        }
      >
        <StyledButtonText>{text}</StyledButtonText>
      </StyledButton>
    </StyledButtonContainer>
  );
};
export default CustomButton;

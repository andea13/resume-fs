import styled from "@emotion/styled";

export const StyledPortfolioListContainer = styled.div`
  margin: 0;
`;

export const StyledPortfolioList = styled.ul`
  display: block;
  // margin-bottom: 60px;

  @media (min-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-right: 0;
    margin-bottom: 60px;
  }
`;

export const StyledPortfolioListItem = styled.li`
  display: block;
  list-style: none;
  // max-width: 450px;
  width: 100%;
  // height: 404px;
  height: 100%;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;

  border-radius: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
    max-width: 265px;
    width: 100%;
    // height: 440px;
    margin-bottom: 30px;

    flex-basis: calc((100% - 20px) / 2);
  }

  @media (min-width: 1200px) {
    max-width: 370px;
    width: 100%;
    flex-basis: calc((100% - 60px) / 3);
  }

  transition: box-shadow var(--transition-time-main) var(--time-function);

  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const StyledPortfolioListLink = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledPortfolioListThumb = styled.div`
  max-width: 670px;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    max-width: 450px;

    height: 440px;
    margin-bottom: 30px;
    margin-left: 0;
    margin-right: 0;
    flex-basis: calc((100% - 20px) / 2);
  }
`;

export const StyledPortfolioListImage = styled.img`
  // width: 100%;
  // height: 100%;
  // object-fit: cover;
  // object-position: center;
`;

export const StyledPortfolioListOverlay = styled.p`
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;

  // max-width: 450px;
  width: 100%;
  max-height: 294px;
  height: 100%;
  margin: 0;
  font-size: 18px;
  padding-top: 77px;
  padding-right: 24px;
  padding-bottom: 77px;
  padding-left: 24px;
  border-radius: 0 0 10px 0px;

  text-align: left;
  line-height: 1.6;
  color: var(--primary-button-color);
  // background-color: rgba(255, 197, 0, 0.75);
  background-color: rgba(61, 133, 198);
  transform: translateY(100%);
  transition: transform var(--transition-time-main) var(--time-function);

  a:hover &,
  a:focus & {
    transform: translateY(0);
  }
`;

export const StyledPortfolioListItemCard = styled.div`
  padding: 20px 24px;
  background-color: #eee;
  border-top: none;
  border-right: 1px solid var(--portfolio-border);
  border-bottom: 1px solid var(--portfolio-border);
  border-left: 1px solid var(--portfolio-border);
  flex-grow: 1;
`;

export const StyledPortfolioListItemTitle = styled.h3`
  color: #878787;
  font-size: 16px;
  line-height: 1.88;
`;

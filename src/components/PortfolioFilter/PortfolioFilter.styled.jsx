import styled from "@emotion/styled";

export const StyledPortfolioFilterContainer = styled.div`
  margin: 0;
`;

export const StyledPortfolioFilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 15px;
  column-gap: 8px;
  max-width: 320px;
  //   width: 100%;
  margin-bottom: 40px;
  margin-left: 0;
  margin-right: 0;
  list-style: none;

  @media (min-width: 768px) {
    max-width: 636px;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;

    @media (min-width: 1200px) {
      margin-bottom: 50px;
    }
  }
`;

export const StyledPortfolioFilterItem = styled.li``;

export const StyledPortfolioFilterTitle = styled.h1``;

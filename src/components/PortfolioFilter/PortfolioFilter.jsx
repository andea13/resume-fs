import React, { useState } from "react";
import { nanoid } from "nanoid";
import {
  StyledPortfolioFilterList,
  StyledPortfolioFilterItem,
  StyledPortfolioFilterContainer,
  StyledPortfolioFilterTitle,
} from "./PortfolioFilter.styled";
import { StyledButton } from "../Button/Button.styled";

const PortfolioFilter = ({ resumeData }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const onFilterChange = (filter) => {
    setActiveFilter(
      resumeData.projectFilters.includes(filter) ? filter : "all"
    );
  };
  return (
    <StyledPortfolioFilterContainer>
      <StyledPortfolioFilterTitle>My Projects</StyledPortfolioFilterTitle>

      <StyledPortfolioFilterList>
        {resumeData.projectFilters.map((filter) => (
          <StyledPortfolioFilterItem key={nanoid()}>
            <StyledButton
              type="button"
              className={`filterButton ${
                filter === activeFilter ? "active" : ""
              }`}
              onClick={() => onFilterChange(filter)}
            >
              {filter}
            </StyledButton>
          </StyledPortfolioFilterItem>
        ))}
      </StyledPortfolioFilterList>
    </StyledPortfolioFilterContainer>
  );
};

export default PortfolioFilter;

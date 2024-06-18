import React from "react";
import { nanoid } from "nanoid";

import {
  StyledPortfolioListContainer,
  StyledPortfolioList,
  StyledPortfolioListItem,
  StyledPortfolioListLink,
  StyledPortfolioListThumb,
  StyledPortfolioListOverlay,
  StyledPortfolioListItemCard,
  StyledPortfolioListItemTitle,
} from "./PortfolioList.styled";

const PortfolioList = ({ resumeData }) => {
  return (
    <StyledPortfolioListContainer>
      <StyledPortfolioList>
        {resumeData.projects.map((project) => (
          <StyledPortfolioListItem key={nanoid()}>
            <StyledPortfolioListLink href={project.link}>
              <StyledPortfolioListThumb>
                {/* <source
                    srcset="
                        ./images/technokriak-desktop.jpg    1x,
                        ./images/technokriak-desktop@2x.jpg 2x
                      "
                    media="(min-width: 1200px)"
                  />
                  <source
                    srcset="
                        ./images/technokriak-tablet.jpg    1x,
                        ./images/technokriak-tablet@2x.jpg 2x
                      "
                    media="(min-width: 768px)"
                  />
                  <source
                    srcset="
                        ./images/technokriak-mobile.jpg    1x,
                        ./images/technokriak-mobile@2x.jpg 2x
                      "
                    media="(max-width: 767px)"
                  /> */}
                <img src={project.img} alt={project.description} />
                <StyledPortfolioListOverlay>
                  {project.description}
                </StyledPortfolioListOverlay>
              </StyledPortfolioListThumb>
              <StyledPortfolioListItemCard>
                <StyledPortfolioListItemTitle>
                  {project.title}
                </StyledPortfolioListItemTitle>
                {/* <p></p> */}
              </StyledPortfolioListItemCard>
            </StyledPortfolioListLink>
          </StyledPortfolioListItem>
        ))}
      </StyledPortfolioList>
    </StyledPortfolioListContainer>
  );
};

export default PortfolioList;

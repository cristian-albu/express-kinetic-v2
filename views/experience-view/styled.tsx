import { BREAKPOINTS, CONTAINER_WIDTH } from "@/shared/constants";
import styled from "styled-components";

export const ExperienceSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 5rem 4rem;
`;

export const ExperienceHeader = styled.div`
  width: 100%;
  max-width: ${CONTAINER_WIDTH}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
  flex-wrap: wrap;
`;

export const ExperienceTitle = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 2rem;
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    width: 100%;
  }
`;

export const ExperienceContainer = styled.div`
  width: 100%;
  max-width: ${CONTAINER_WIDTH}px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  position: relative;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    grid-template-columns: 1fr;
  }
`;

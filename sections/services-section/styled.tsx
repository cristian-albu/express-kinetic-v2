import { BREAKPOINTS, COLORS, CONTAINER_WIDTH } from "@/shared/constants";
import styled, { keyframes } from "styled-components";

export const CloudsAnimation = keyframes`
    0% {transform: translateX(0vw);}
    50% {transform: translateX(50vw);}
    100% {transform: translateX(0vw);}
`;

export const ServicesSec = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, ${COLORS.sky2}45 0%, white 100%);
  overflow: hidden;
  position: relative;
  padding-bottom: 5rem;
  padding: 0rem 4rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: url("/clouds.svg") 0% 0% / 100% repeat;
    opacity: 0.5;
    animation: ${CloudsAnimation} 60s linear infinite;
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    padding: 0rem 2rem;
  }
`;

export const ServicesContainer = styled.div`
  width: 100%;
  max-width: ${CONTAINER_WIDTH}px;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 2rem;
  position: relative;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    grid-template-columns: 1fr;
  }
`;
export const ServicesHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  & > h2 {
    margin: 0;
  }
`;

export const ServicesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const ServicesCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: white;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  gap: 1rem;
  font-size: 0.8rem;
  box-shadow: 2rem 2rem 2rem 0.2rem ${COLORS.sky2}45;
  position: relative;

  & > h3 {
    font-size: 1.2rem;
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    margin-bottom: 1rem;
  }
`;

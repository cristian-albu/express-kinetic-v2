import { BREAKPOINTS, COLORS, CONTAINER_WIDTH } from "@/shared/constants";
import styled from "styled-components";

export const TestimonialSec = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0rem 4rem 4rem 4rem;
    background: linear-gradient(180deg, ${COLORS.sky2}45 0%, ${COLORS.sky1} 100%), url("/stars.svg");
`;

export const TestimonialContainer = styled.div`
    width: 100%;
    max-width: ${CONTAINER_WIDTH}px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const TestimonialHeader = styled.div`
    padding: 2rem 0rem;
`;

export const TestimonialContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    align-items: start;

    @media (max-width: ${BREAKPOINTS.tablet}px) {
        grid-template-columns: 1fr;
    }
`;

export const TestimonialCard = styled.div`
    width: 100%;
    background-color: white;
    display: inline-block;
    padding: 1.5rem;
    position: relative;
    font-size: 0.8rem;
    border-radius: 1rem;
    box-shadow: 2rem 2rem 2rem 0.2rem ${COLORS.sky2}45;
    position: relative;

    & > h3 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    &::after {
        content: "";
        position: absolute;
        right: -1.5rem;
        top: -1.5rem;
        height: 4rem;
        aspect-ratio: 1/1;
        background: url("/sunflower.svg") center center / 100% no-repeat;
    }
`;

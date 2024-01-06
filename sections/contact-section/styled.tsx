import { BREAKPOINTS, COLORS, CONTAINER_WIDTH } from "@/shared/constants";
import styled from "styled-components";

const CONTACT_HILLS_HEIGHT = 10;

const TREE_HEIGHT = 7;
const TREE_WIDTH = 2;

export const ContactSec = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem;
    background: url("/stars.svg"), linear-gradient(0deg, ${COLORS.sky2} 0%, ${COLORS.sky1} 100%);
    overflow: hidden;
    position: relative;
    padding-bottom: ${CONTACT_HILLS_HEIGHT - 2}rem;
`;

export const ContactContainer = styled.div`
    width: 100%;
    max-width: ${CONTAINER_WIDTH}px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;

    @media (max-width: ${BREAKPOINTS.tablet}px) {
        grid-template-columns: 1fr;
    }
`;

export const ContactDetails = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    justify-content: center;
`;

export const ContactLabel = styled.label<{ $checkbox?: boolean }>`
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: ${(props) => (props.$checkbox ? "row-reverse" : "column")};
    justify-content: flex-start;
    align-items: ${(props) => (props.$checkbox ? "center" : "flex-start")};
    gap: 0.5rem;

    & > input[type="text"],
    input[type="email"],
    input[type="tel"],
    input[type="number"],
    textarea {
        width: 100%;
        padding: 0.3rem 0.5rem;
        border-radius: 0.3rem;
        border: 1px solid black;
        outline: none;
    }

    & > textarea {
        width: 100%;
        resize: none;
    }

    & > input[type="checkbox"] {
        width: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    background-color: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 2rem 2rem 2rem 0.2rem ${COLORS.sky2};

    & > button {
        width: 100%;
        padding: 0.7rem;
        border-radius: 0.5rem;
        color: white;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        outline: none;
        transition: transform 0.2s ease-in-out;
        &:hover {
            transform: scale(1.02);
        }

        &:active {
            transform: scale(0.98);
        }
    }
`;

export const Tree = styled.div<{ $bottom?: number; $left?: number; $sizeRatio?: number }>`
    position: absolute;
    bottom: ${(props) => props.$bottom ?? 0}%;
    left: ${(props) => props.$left ?? 0}%;
    width: 0;
    height: 0;
    border-left: ${TREE_WIDTH}rem solid transparent;
    border-right: ${TREE_WIDTH}rem solid transparent;
    border-bottom: ${TREE_HEIGHT}rem solid black;
    scale: ${(props) => props.$sizeRatio ?? 1};
`;

export const Hills = styled.div`
    width: 100%;
    height: ${CONTACT_HILLS_HEIGHT}rem;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;

    & > div {
        position: absolute;
        bottom: 0;
        left: 0;
    }

    & > :nth-child(1) {
        width: 100%;
        height: 100%;
        background-color: ${COLORS.hills1};
        z-index: 1;
        border-radius: 100% 0 0 0;

        & > ${Tree} {
            border-bottom-color: ${COLORS.hills1};
        }
    }

    & > :nth-child(2) {
        width: 100%;
        height: 70%;
        background-color: ${COLORS.hills2};
        z-index: 2;
        border-radius: 0 100% 0 0;

        & > ${Tree} {
            border-bottom-color: ${COLORS.hills2};
        }
    }

    & > :nth-child(3) {
        width: 100%;
        height: 55%;
        background-color: ${COLORS.hills3};
        z-index: 3;
        border-radius: 100% 0 0 0;

        & > ${Tree} {
            border-bottom-color: ${COLORS.hills3};
        }
    }
`;

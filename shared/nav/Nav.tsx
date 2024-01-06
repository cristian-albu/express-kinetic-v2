"use client";
import { navData } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styled from "styled-components";

export const NavBar = styled.nav`
    background-color: black;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    display: flex;
    justify-content: flex-start;
    gap: 1.5rem;
    align-items: center;
    padding: 0.5rem 2rem;

    & > :first-child {
        margin-right: auto;
    }
`;

const Nav = () => {
    const route = usePathname();

    console.log(route);
    return (
        <NavBar>
            {navData.map((e) =>
                route === "/" ? <a href={`#${e.link}`}>{e.label}</a> : <Link href={`/#${e.link}`}>{e.label}</Link>
            )}
        </NavBar>
    );
};

export default Nav;

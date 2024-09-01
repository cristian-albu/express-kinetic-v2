"use client";
import { navData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

export const NavBar = styled.nav`
  background-color: white;
  color: black;
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
  border-bottom: 2px solid ${COLORS.sky2};

  & > :first-child {
    margin-right: auto;
  }

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Nav = () => {
  const route = usePathname();

  return (
    <NavBar>
      {navData.map((e, index) =>
        route === "/" ? (
          <a href={`${e.link[0] !== "/" ? "#" : ""}${e.link}`} key={e.label}>
            {index === 0 && <Image src={"/logo_express_kinetic.svg"} width={25} height={25} alt="logo" />}
            {e.label}
          </a>
        ) : (
          <Link href={`/${e.link[0] !== "/" ? "#" : ""}${e.link}`} key={e.label}>
            {e.label}
          </Link>
        )
      )}
    </NavBar>
  );
};

export default Nav;

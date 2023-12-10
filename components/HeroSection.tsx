"use client";
import { THeroSectionData } from "@/data/data";
import React from "react";

const HeroSection: React.FC<THeroSectionData> = ({ title, description, mainAction, otherActions }) => {
    return <section>{title}</section>;
};

export default HeroSection;

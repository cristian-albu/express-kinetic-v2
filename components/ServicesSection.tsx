"use client";
import { TServicesSectionData } from "@/data/data";
import React from "react";

const ServicesSection: React.FC<TServicesSectionData> = ({ title, p1, p2, services }) => {
    return <section>{title}</section>;
};

export default ServicesSection;

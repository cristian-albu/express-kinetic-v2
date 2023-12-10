"use client";
import { TContactSectionData } from "@/data/data";
import React from "react";

const ContactSection: React.FC<TContactSectionData> = ({ title, cta, cta2, contactDetails, contactForm }) => {
    return <section>{title}</section>;
};

export default ContactSection;

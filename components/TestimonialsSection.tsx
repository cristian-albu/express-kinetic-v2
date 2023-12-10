"use client";
import { TTestimonialsSectionData } from "@/data/data";
import React from "react";

const TestimonialsSection: React.FC<TTestimonialsSectionData> = ({ title, description, testimonials }) => {
    return <section>{title}</section>;
};

export default TestimonialsSection;

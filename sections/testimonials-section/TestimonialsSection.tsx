"use client";
import { TTestimonialsSectionData, navData } from "@/data/data";
import React from "react";
import { TestimonialCard, TestimonialContainer, TestimonialContent, TestimonialHeader, TestimonialSec } from "./styled";

const TestimonialsSection: React.FC<TTestimonialsSectionData> = ({ title, description, testimonials }) => {
    return (
        <TestimonialSec id={navData[2].link}>
            <TestimonialContainer>
                <TestimonialHeader>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </TestimonialHeader>

                <TestimonialContent>
                    {testimonials.map((e) => (
                        <TestimonialCard key={e.name}>
                            <h3>{e.name}.</h3>
                            <p>"{e.testimonial}"</p>
                        </TestimonialCard>
                    ))}
                </TestimonialContent>
            </TestimonialContainer>
        </TestimonialSec>
    );
};

export default TestimonialsSection;

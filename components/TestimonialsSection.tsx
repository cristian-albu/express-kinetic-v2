"use client";
import { TTestimonialsSectionData } from "@/data/data";
import React from "react";

const TestimonialsSection: React.FC<TTestimonialsSectionData> = ({ title, description, testimonials }) => {
    return (
        <section>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div>
                {testimonials.map((e) => {
                    return (
                        <div key={e.name}>
                            <h3>{e.name}</h3>
                            <p>{e.testimonial}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TestimonialsSection;

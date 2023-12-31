"use client";
import { TServicesSectionData } from "@/data/data";
import React from "react";

const ServicesSection: React.FC<TServicesSectionData> = ({ title, p1, p2, services }) => {
    return (
        <section>
            <div>
                <h2>{title}</h2>
                <p>{p1}</p>
                <p>{p2}</p>
            </div>

            <div>
                {services.map((e) => {
                    return (
                        <div key={e.title}>
                            <h3>{e.title}</h3>
                            <p>{e.description}</p>
                            <p>{e.details}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ServicesSection;

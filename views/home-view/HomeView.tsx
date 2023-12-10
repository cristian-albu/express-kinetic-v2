"use client";
import React from "react";
import { THeroSectionData, TServicesSectionData, TTestimonialsSectionData, TContactSectionData } from "@/data/data";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export type THomeViewData = {
    heroData: THeroSectionData;
    serivcesData: TServicesSectionData;
    testimonialsData: TTestimonialsSectionData;
    contactData: TContactSectionData;
};

const HomeView: React.FC<THomeViewData> = ({ heroData, serivcesData, testimonialsData, contactData }) => {
    return (
        <main>
            <HeroSection {...heroData} />
            <ServicesSection {...serivcesData} />
            <TestimonialsSection {...testimonialsData} />
            <ContactSection {...contactData} />
        </main>
    );
};

export default HomeView;

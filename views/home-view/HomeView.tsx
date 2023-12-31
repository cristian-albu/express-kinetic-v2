"use client";
import React from "react";
import { THeroSectionData, TServicesSectionData, TTestimonialsSectionData, TContactSectionData } from "@/data/data";
import HeroSection from "@/sections/hero-section/HeroSection";
import ServicesSection from "@/sections/services-section/ServicesSection";
import TestimonialsSection from "@/sections/testimonials-section/TestimonialsSection";
import ContactSection from "@/sections/contact-section/ContactSection";

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

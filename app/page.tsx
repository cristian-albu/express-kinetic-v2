import { contactSectionData, heroSectionData, servicesSectionData, testimonialSectionData } from "@/data/data";
import HomeView, { THomeViewData } from "@/views/home-view/HomeView";
import React from "react";

const HomePage = () => {
    const data: THomeViewData = {
        heroData: heroSectionData,
        serivcesData: servicesSectionData,
        testimonialsData: testimonialSectionData,
        contactData: contactSectionData,
    };
    return <HomeView {...data} />;
};

export default HomePage;

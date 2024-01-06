"use server";
import client from "@/client";
import { contactSectionData, heroSectionData, servicesSectionData, testimonialSectionData } from "@/data/data";
import HomeView, { THomeViewData } from "@/views/home-view/HomeView";
import { Entry } from "contentful";
import React from "react";

// const getPosts = async (): Promise<Entry<any>[]> => {
//     try {
//         const res = await client.getEntries({
//             content_type: "blogPost",
//         });

//         return res.items;
//     } catch (error) {
//         console.log(error);
//         throw new Error("Something went wrong");
//     }
// };

const HomePage = async () => {
    const data: THomeViewData = {
        heroData: heroSectionData,
        serivcesData: servicesSectionData,
        testimonialsData: testimonialSectionData,
        contactData: contactSectionData,
    };

    // const posts = await getPosts();

    return <HomeView {...data} />;
};

export default HomePage;

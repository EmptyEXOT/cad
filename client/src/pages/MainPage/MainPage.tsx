import React from 'react';
import {HeaderSection} from "@/pages/MainPage/Sections/HeaderSection/HeaderSection";
import {AboutSection} from "./Sections/AboutSection/AboutSection";
import {ServicesSection} from "@/pages/MainPage/Sections/ServicesSection/ServicesSection";
import {IndevSection} from "@/pages/MainPage/Sections/IndevSection/IndevSection";
import {BenefitsSection} from "@/pages/MainPage/Sections/BenefitsSection/BenefitsSection";
import {InvitationSection} from "@/pages/MainPage/Sections/InvitationSection/InvitationSection";
import {FAQSection} from "@/pages/MainPage/Sections/FAQSection/FAQSection";
import {Footer} from "@/widgets/Footer/ui/Footer";


const MainPage = () => {
    return (
        <>
            <HeaderSection/>
            <IndevSection />
            <AboutSection/>
            <ServicesSection/>
            <BenefitsSection/>
            <InvitationSection/>
            <FAQSection/>
            <Footer/>
        </>
    )
};

export default MainPage
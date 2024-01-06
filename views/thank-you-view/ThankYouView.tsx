"use client";
import { ContactContainer, ContactSec, Hills, Tree } from "@/sections/contact-section/styled";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const ThankYouSection = styled(ContactSec)`
    min-height: 100vh;
`;

const ThankYouContainer = styled(ContactContainer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ThankYouView = () => {
    return (
        <ThankYouSection>
            <ThankYouContainer>
                <h2>Mulțumim pentru mesaj!</h2>
                <p>Te vom contacta cât de curând</p>
                <Link href={"/"}>🏠 Mergi înapoi acasă</Link>
            </ThankYouContainer>
            <Hills>
                <div>
                    <Tree $bottom={40} $left={25} $sizeRatio={0.7} />
                    <Tree $bottom={90} $left={90} $sizeRatio={1} />
                </div>
                <div>
                    <Tree $bottom={90} $left={8} $sizeRatio={1.5} />
                </div>
                <div>
                    <Tree $bottom={90} $left={80} $sizeRatio={2} />
                </div>
            </Hills>
        </ThankYouSection>
    );
};

export default ThankYouView;

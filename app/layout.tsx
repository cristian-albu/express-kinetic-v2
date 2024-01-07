import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Nav from "@/shared/nav/Nav";
import Footer from "@/shared/footer/Footer";

const merriweather = Merriweather({ weight: ["400", "700"], subsets: ["latin-ext"] });

export const metadata: Metadata = {
    title: "Express Kinetic - Terapie pentru copii",
    description:
        "Transformăm mișcarea într-o aventură plină de zâmbete și realizări! Suntem aici pentru a sprijini fiecare micuț în călătoria sa unică către dezvoltarea fizică și emoțională.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={merriweather.className}>
                <StyledComponentsRegistry>
                    <>
                        <Nav />
                        {children}
                        <Footer />
                    </>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}

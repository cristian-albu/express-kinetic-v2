"use client";
import { TContactSectionData, navData } from "@/data/data";
import { useRouter } from "next/navigation";
import React, { FormEvent, useRef, useState } from "react";
import {
    ContactContainer,
    ContactDetails,
    ContactForm,
    ContactLabel,
    ContactSec,
    ErrorMessage,
    Hills,
    Tree,
} from "./styled";

const ContactSection: React.FC<TContactSectionData> = ({ title, cta, cta2, contactDetails, contactForm }) => {
    const { name, email, phone, message, checkbox, btnText } = contactForm;

    const formInputs = [name, email, phone, message, checkbox];

    const ref = useRef<null | HTMLFormElement>(null);
    const [errorState, setErrorState] = useState("");
    const { push } = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!ref.current) {
            throw new Error("Something went wrong");
        }

        const formData: Record<string, string | boolean> = Array.from(ref.current.elements).reduce(
            (acc: Record<string, string | boolean>, curr: Element) => {
                if (curr instanceof HTMLInputElement || curr instanceof HTMLTextAreaElement) {
                    acc[curr.id] = curr instanceof HTMLInputElement && curr.type === "checkbox" ? curr.checked : curr.value;
                }
                return acc;
            },
            {}
        );

        if (Object.values(formData).some((e) => e === "" || e === false)) {
            setErrorState("Vă rugăm completați toate câmpurile");
            return;
        }

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: process.env.NEXT_PUBLIC_WEB3_FORMS_KEY,
                ...formData,
            }),
        });

        const result = await response.json();

        if (result.success) {
            setErrorState("");
            push("/multumim");
        } else {
            setErrorState("A apărut o eroare. Vă rugăm încercați mai târziu");
        }
    };
    return (
        <ContactSec id={navData[3].link}>
            <ContactContainer>
                <ContactDetails>
                    <h2>{title}</h2>
                    <p>{cta}</p>

                    {contactDetails.map((e) => {
                        const externalLink = e.link.link.startsWith("http");
                        return (
                            <span key={e.title}>
                                {e.title}:
                                <a
                                    href={e.link.link}
                                    rel={externalLink ? "noreferrer noopener" : undefined}
                                    target={externalLink ? "_blank" : undefined}
                                >
                                    {e.link.label}
                                </a>
                            </span>
                        );
                    })}
                </ContactDetails>

                <ContactForm action="" onSubmit={handleSubmit} ref={ref}>
                    <p>{cta2}</p>
                    {formInputs.map(({ type, label }) => (
                        <ContactLabel key={label} $checkbox={type === "checkbox" ? true : false}>
                            {type === "checkbox" && <a href="#pdc">👉</a>}
                            <p>{label}</p>

                            {type === "textarea" ? (
                                <textarea id={label} name={label} />
                            ) : (
                                <input id={label} name={label} type={type} />
                            )}
                        </ContactLabel>
                    ))}
                    {}

                    <button type="submit">✉️{btnText}</button>
                    {errorState && (
                        <ErrorMessage>
                            {"🚩"}
                            {errorState}
                        </ErrorMessage>
                    )}
                </ContactForm>
            </ContactContainer>
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
        </ContactSec>
    );
};

export default ContactSection;

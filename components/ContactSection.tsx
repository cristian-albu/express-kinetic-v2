"use client";
import { TContactSectionData } from "@/data/data";
import { useRouter } from "next/navigation";
import React, { FormEvent, useRef, useState } from "react";

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

        const formData = Array.from(ref.current.elements).reduce((acc: Record<string, string | boolean>, curr: Element) => {
            if (curr instanceof HTMLInputElement || curr instanceof HTMLTextAreaElement) {
                acc[curr.id] = curr instanceof HTMLInputElement && curr.type === "checkbox" ? curr.checked : curr.value;
            }
            return acc;
        }, {});

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
        <section>
            <div>
                <h2>{title}</h2>
                <p>{cta}</p>
            </div>

            <div>
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
                <form action="" onSubmit={handleSubmit} ref={ref}>
                    <p>{cta2}</p>
                    {formInputs.map(({ type, label }) => {
                        return (
                            <label key={label}>
                                <p>{label}</p>
                                {type === "textarea" ? (
                                    <textarea id={label} name={label} />
                                ) : (
                                    <input id={label} name={label} type={type} />
                                )}
                            </label>
                        );
                    })}
                    {}

                    <button type="submit">{btnText}</button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;

import { BRAND_NAME, EMAIL_ADRRESS } from "./data";

export const privacyPolicy = [
    { tag: "h2", content: `Politica de Confidențialitate - ${BRAND_NAME}` },
    { tag: "p", content: "Ultima actualizare: 7/1/2024" },

    { tag: "h3", content: "1. Introducere" },
    {
        tag: "p",
        content: `Bun venit pe site-ul ${BRAND_NAME}. Ne angajăm să protejăm confidențialitatea și securitatea datelor dvs. personale. Această politică de confidențialitate explică cum colectăm, folosim și protejăm informațiile pe care le furnizați atunci când utilizați website-ul nostru.`,
    },

    { tag: "h3", content: "2. Datele colectate" },
    {
        tag: "p",
        content:
            "Prin utilizarea site-ului nostru, vă puteți oferi consimțământul pentru colectarea următoarelor date (furnizat în formularul de contact):",
    },
    { tag: "p", content: "- Nume" },
    { tag: "p", content: "- Adresă de e-mail" },
    { tag: "p", content: "- Telefon" },
    { tag: "p", content: "- Mesaj " },

    { tag: "h3", content: "3. Scopul colectării datelor" },
    {
        tag: "p",
        content:
            "Datele personale colectate vor fi utilizate exclusiv în scopul furnizării și gestionării serviciilor noastre de kinetoterapie. Aceste date pot fi folosite pentru a vă contacta în legătură cu solicitările dvs. sau pentru a vă trimite informații relevante despre serviciile noastre.",
    },

    { tag: "h3", content: "4. Securitatea datelor" },
    {
        tag: "p",
        content:
            "Ne angajăm să luăm toate măsurile rezonabile pentru a vă proteja datele personale împotriva accesului neautorizat, utilizării sau divulgării neautorizate.",
    },

    { tag: "h3", content: "5. Cookie-uri" },
    {
        tag: "p",
        content:
            "Site-ul nostru poate utiliza cookie-uri pentru a îmbunătăți experiența de navigare. Puteți gestiona setările cookie-urilor din browser-ul dvs.",
    },

    { tag: "h3", content: "6. Partajarea datelor" },
    {
        tag: "p",
        content:
            "Nu vom partaja, vinde sau închiria datele dvs. personale către terțe părți fără consimțământul dvs. explicit, cu excepția cazurilor în care este necesar pentru furnizarea serviciilor solicitate sau în conformitate cu legea.",
    },

    { tag: "h3", content: "7. Drepturile dvs." },
    {
        tag: "p",
        content:
            "Aveți dreptul să solicitați accesul la datele dvs. personale, să le corectați, să le ștergeți sau să vă retrageți consimțământul în orice moment.",
    },

    { tag: "h3", content: "8. Formularul de contact" },
    {
        tag: "p",
        content:
            "Folosirea formularului de contact implică consimțământul dvs. pentru colectarea și prelucrarea datelor conform acestei politici de confidențialitate.",
    },

    { tag: "h3", content: "9. Actualizări la Politica de Confidențialitate" },
    {
        tag: "p",
        content:
            "Această politică de confidențialitate poate fi actualizată periodic. Orice modificare semnificativă va fi comunicată prin intermediul site-ului nostru sau prin e-mail, în funcție de caz.",
    },

    { tag: "h3", content: "10. Contact" },
    {
        tag: "p",
        content: `Dacă aveți întrebări sau preocupări cu privire la această politică de confidențialitate, vă rugăm să ne contactați la adresa ${EMAIL_ADRRESS}`,
    },
];

const BRAND_NAME = "Express Kinetic";
const EMAIL_ADRRESS = "expresskinetic@gmail.com";
const FACEBOOK_LINK = "https://www.facebook.com";
const INSTAGRAM_LINK = "https://www.instagram.com";
const PHONE_NUMBER = "+40 784 631 985";

export type TLinkData = { link: string; label: string };

export const navData: TLinkData[] = [
    { link: "#acasa", label: BRAND_NAME },
    { link: "#servicii", label: "Servicii" },
    { link: "#testimoniale", label: "Testimoniale" },
    { link: "#contact", label: "Contact" },
];

export type THeroSectionData = {
    title: string;
    description: string;
    mainAction: TLinkData;
    otherActions: TLinkData[];
};

export const heroSectionData: THeroSectionData = {
    title: "Terapie pentru copii",
    description: `Transformăm mișcarea într-o aventură plină de zâmbete și realizări! Suntem aici pentru a sprijini
    fiecare micuț în călătoria sa unică către dezvoltarea fizică și emoțională.`,
    mainAction: { link: "#contact", label: "Hai să vorbim" },
    otherActions: [
        { link: FACEBOOK_LINK, label: "Facebook" },
        { link: INSTAGRAM_LINK, label: "Instagram" },
    ],
};

export type TServicesData = { title: string; description: string; details: string };

export type TServicesSectionData = {
    title: string;
    p1: string;
    p2: string;
    services: TServicesData[];
};

export const servicesSectionData: TServicesSectionData = {
    title: "Servicii",
    p1: `Prin jocuri creative, exerciții distractive și o atenție individualizată, ne asigurăm că fiecare
    zi petrecută la noi este plină de bucurie și progres.`,
    p2: `Înțelegem că fiecare copil are propriul său ritm și nevoi unice, și suntem aici pentru a-i ajuta
    să exploreze și să înțeleagă lumea lor într-un mod nou și stimulant.`,
    services: [
        {
            title: "Kinetoterapie",
            description: `Recuperarea medicală este ca un ajutor magic pentru cei mici care pot avea probleme cu corpul
            lor. Ne ocupăm de copiii care pot avea probleme cu oasele, mușchii sau pot fi obosiți din
            cauza unor lucruri ciudate care li s-au întâmplat.`,
            details: `Suntem aici pentru a face ca mișcarea să fie distractivă și ușoară, pentru ca toți copiii să
            se bucure de jocuri și aventuri fără griji.`,
        },
        {
            title: "Terapie de Integrare Senzoriala",
            description: ` Integrarea senzorială este o abordare specială care ajută copiii să dezvolte abilități
        esențiale pentru a se integra în lumea din jurul lor. Scopul principal este să sprijinim
        copiii în dezvoltarea lor, astfel încât să devină adulți independenți și să se integreze cu
        succes în societate.`,
            details: ` Această metodă le oferă copiilor instrumentele necesare pentru a face față provocărilor
        vieții și a crește încrezători și echilibrați.`,
        },
        {
            title: "Logopedie",
            description: `Logopedia este un serviciu minunat pentru copiii noștri! Scopul ei este să-i ajute să devină
        vorbitori mai buni și să se simtă mai încrezători în relațiile cu ceilalți.`,
            details: ` Ne ajută să învățăm cum să vorbim mai clar și cum să ne exprimăm mai bine gândurile și
        sentimentele. Prin logopedie, copiii pot deveni niște maeștri ai comunicării și pot exprima
        cu succes gândurile și sentimentele lor.`,
        },
    ],
};

export type TTestimonialsData = {
    name: string;
    testimonial: string;
};

export type TTestimonialsSectionData = {
    title: string;
    description?: string;
    testimonials: TTestimonialsData[];
};

export const testimonialSectionData: TTestimonialsSectionData = {
    title: "Ce spun părinții",
    description: "",
    testimonials: [
        {
            name: "Maria C",
            testimonial: `Va mulțumim! Am plecat cu lacrimi in ochi așa de mult m-am emoționat. Am interacționat cu
    multi terapeuți din diferite orașe (Cluj, Bacău, Iași) și am avut experiențe frumoase, oameni
    cu suflet mare și implicați însă aici la dvs așteptările au fost depășite cu mult. Va
    mulțumim că ne-ați tratat piticele cu dragoste și cu devotament. Ați depus o muncă titanica
    nu doar in timpul petrecut cu ele ci și pentru pregătirea activităților și asta s-a văzut. Va
    îmbrățișăm și ne dorim sa ne revedem cu bine! Eu personal va voi recomanda din toată inima.`,
        },
        {
            name: "Iulia I",
            testimonial: `Echipa ${BRAND_NAME} este minunată și abordarea individualizată a făcut o diferență uriașă
        pentru copilul meu. Am observat progrese semnificative și îl văd pe micuțul meu câștigând
        încredere în fiecare zi. Recomand cu căldură!`,
        },
        {
            name: "Daniela P",
            testimonial: ` Când am adus pentru prima dată aici pe micuțul nostru, eram plini de îngrijorare și
        incertitudine. El avea dificultăți în mișcare și în comunicare, și nu știam cum să-l ajutăm
        mai bine. Astăzi, copilul nostru este un copil fericit, mai încrezător și mai independent. Nu
        putem să ne exprimăm suficient de recunoștința față de acest serviciu de kinetoterapie și de
        echipa sa minunată. Recomandăm cu căldură acest loc tuturor părinților care au copii cu nevoi
        speciale. Este locul unde minuni devin realitate!`,
        },
    ],
};

export type TContactDetailData = {
    title: string;
    link: TLinkData;
};

export type TInputType = {
    label: string;
    type: "text" | "email" | "number" | "textarea" | "checkbox";
};

export type TContactForm = {
    name: TInputType;
    email: TInputType;
    phone: TInputType;
    message: TInputType;
    checkbox: TInputType;
    btnText: string;
};

export type TContactSectionData = {
    title: string;
    cta: string;
    cta2: string;
    contactDetails: TContactDetailData[];
    contactForm: TContactForm;
};

export const contactSectionData: TContactSectionData = {
    title: "Ne dorim să fim alături de voi!",
    cta: `Dacă aveți întrebări, sau doriți să stabiliți o întâlnire nu ezitați să ne contactați. Suntem
    gata să fim alături de dumneavoastră și de copilul dumneavoastră pentru a vă oferi sprijinul
    necesar.`,
    cta2: `Așa că, hai să ne jucăm și să ne simțim mai bine împreună!`,
    contactDetails: [
        {
            title: "Adresa",
            link: { link: "https://maps.app.goo.gl/gtcYQG9j52rZAaST7", label: "Iași, Bulevardul Nicolae Iorga nr. 31" },
        },
        { title: "Email", link: { link: `mailto:${EMAIL_ADRRESS}`, label: EMAIL_ADRRESS } },
        { title: "Telefon", link: { link: `tel:${PHONE_NUMBER}`, label: PHONE_NUMBER } },
    ],
    contactForm: {
        name: { label: "Nume*", type: "text" },
        email: { label: "Email*", type: "email" },
        phone: { label: "Telefon*", type: "number" },
        message: { label: "Mesaj", type: "textarea" },
        checkbox: { label: "Sunt de acord cu procesarea datelor personale*", type: "checkbox" },
        btnText: "Trimite",
    },
};

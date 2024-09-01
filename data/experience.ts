export type T_Certificate = {
  certificate: string;
  title: string;
};

export type T_Experience = {
  title: string;
  description: string;
  certificates: T_Certificate[];
};

export const experienceData: T_Experience = {
  title: "Experiență Luminița Bulgarescu Amironesei",
  description: `De-a lungul anilor, am avut privilegiul de a învăța de la cei mai buni și de a participa la cursuri 
  care mi-au îmbogățit cunoștințele și abilitățile. Fiecare certificat obținut reflectă dorința mea 
  de a oferi cele mai bune soluții pentru recuperare și îngrijire. `,
  certificates: [
    { title: "Master ", certificate: "Bioingineria Reabilitării UMF Iași" },
    { title: "Licență", certificate: "Balneofiziokinetoterapie și recuperare UMF Iași" },
    { title: "Certificat de absolvire", certificate: "Tehnician Maseur" },
    { title: "Certificat de participare workshop", certificate: "Kinetoprofilaxie  și wellness by Rowe" },
    { title: "Certificat de participare", certificate: "Metode și Tehnici de Recuperare a Deficientelor Dorso-Lombare" },
    {
      title: "Diplomă de participare workshop",
      certificate: "Laser terapia în tratamentul herniei de disc cervicale și lombare",
    },
    { title: "Diplomă de participare workshop", certificate: "Kinetoterapia în scolioze, diagnostic și tratament" },
    { title: "Diplomă de participare workshop", certificate: "Sindrom miofascial, diagnostic și recuperare medicală" },
    { title: "Certificat de participare", certificate: "Electrostimularea în Practica Fizioterapeutului" },
    { title: "Certificat de participare", certificate: "Aplicatii Practice Modelele Williams, Kabat și Codman" },
    { title: "Diplomă", certificate: `"Initiere in Aromaterapie" Academia Vivasan` },
    {
      title: "Certificat de participare",
      certificate: `"Psihologia uleiurilor esențiale-testare emoțională" Academia Vivasan`,
    },
    {
      title: "Certificat de participare",
      certificate: `Cursul "Terapia Dizartriei, Abordare psihomotorie" - formator Tatiana Blaga`,
    },
    { title: "Certificat de absolvire", certificate: "Pedagog de recuperare- S.C. Talk. Therapy S.R.L" },
    { title: "Certificat de absolvire", certificate: "Curs de inițiere în terapia YUMEIHO" },
    { title: "Certificat de absolvire", certificate: "Curs de perfecționare în terapia YUMEIHO – Gradul Doi" },
    {
      title: "Certificat de absolvire",
      certificate: `Ocupaţia de COMPETENTE SOCIALE ȘI CIVICE (Integrare senzorială) – formator Dana Tair`,
    },
    {
      title: "Participare la Webinar",
      certificate: `"JOINT ATTENTION", de la identificarea gesturilor la predarea lor - Catalina Nicolescu formator JASPER `,
    },
    {
      title: "Participare la Masterclass",
      certificate: "Bazele Logopediei - Institutul de Logopedie",
    },
  ],
};

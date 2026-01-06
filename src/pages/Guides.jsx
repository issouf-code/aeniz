import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const Section = ({ title, accent = "orange", children }) => {
  const borderColor =
    accent === "green" ? "border-green-600" : "border-orange-500";

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm space-y-4">
      <h2
        className={`border-l-4 ${borderColor} pl-3 text-2xl font-semibold text-gray-900`}
      >
        {title}
      </h2>
      {children}
    </section>
  );
};

export default function Guide() {
  const admissionLinks = useMemo(
    () => [
      { label: "BACHELOR", path: "/table-ug" },
      { label: "MASTER", path: "/table-ms" },
      { label: "DOCTORAT (PhD)", path: "/table-ph" },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800 sm:px-12 space-y-12">
      {/* ================= HEADER ================= */}
      <header className="mx-auto max-w-4xl text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-orange-500">
          Guide général des programmes et de la vie sociale à Zaria
        </h1>
        <p className="text-lg text-gray-600">
          Ce guide aide les nouveaux étudiants internationaux à comprendre les
          démarches, les programmes disponibles et la vie à Zaria.
        </p>
      </header>

      {/* ================= DOCUMENT TRANSLATION ================= */}
      <Section title="Traduction des documents">
        <p className="text-gray-700">
          La traduction de chaque document coûte{" "}
          <span className="font-semibold">5000 naira</span>, soit l’équivalent de
          quelques dollars selon le taux du jour.
        </p>
      </Section>

      {/* ================= LANGUAGE PROGRAM ================= */}
      <Section title="Bain linguistique" accent="green">
        <p>Nous disposons de plusieurs centres de formation linguistique :</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>IDRT Proficiency Program</li>
          <li>Centre de Zain</li>
          <li>Redemption College</li>
        </ul>
        <p>
          Frais d’inscription :{" "}
          <span className="font-semibold">50,000 – 80,000 naira</span>.
        </p>

        <p className="font-medium">Matières enseignées :</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Grammaire</li>
          <li>Vocabulaire</li>
          <li>Phonétique</li>
          <li>Traduction</li>
          <li>Communication</li>
          <li>Expression orale</li>
        </ul>
      </Section>

      {/* ================= ABU ZARIA ================= */}
      <Section title="ABU Zaria">
        <p className="text-gray-700">
          Tous les documents doivent être traduits avant de commencer la
          procédure d’admission. Les exigences varient selon le département.
        </p>

        <p className="font-semibold text-red-600">IMPORTANT :</p>
        <p>Consultez les critères d’admission selon le niveau :</p>

        <nav className="flex flex-wrap justify-center gap-4 pt-2">
          {admissionLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="rounded-md bg-green-700 px-5 py-2 text-white transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Section>

      {/* ================= OTHER INSTITUTIONS ================= */}
      <Section title="Autres institutions" accent="green">
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <span className="font-semibold">NITT</span> — Institut des transports
            et de la logistique.
          </li>
          <li>
            <span className="font-semibold">NILEST</span> — Institut du cuir,
            important pour le développement industriel.
          </li>
        </ul>
      </Section>

      {/* ================= HOUSING ================= */}
      <Section title="Logement à l'intérieur et à l'extérieur">
        <p>
          Une maison d’accueil est disponible pour{" "}
          <span className="font-semibold">4 jours maximum</span> en attendant un
          logement définitif.
        </p>
        <p>
          Frais d’accueil et carte de membre :{" "}
          <span className="font-semibold">5000 naira</span>.
        </p>

        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Sans douche : 80,000 – 100,000 naira</li>
          <li>Avec douche : 100,000 – 600,000 naira</li>
        </ul>

        <p className="italic text-gray-600">
          NB : Les chambres sont louées vides.
        </p>
      </Section>

      {/* ================= ESSENTIAL ITEMS ================= */}
      <Section title="Matériel de première nécessité" accent="green">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Matelas</li>
          <li>Gaz / réchaud</li>
          <li>Marmite</li>
          <li>Seau</li>
          <li>Autres selon vos besoins</li>
        </ul>

        <p className="text-gray-700">
          <span className="font-semibold">Conseil :</span> venir avec votre
          matériel est un avantage.
        </p>
      </Section>

      {/* ================= LIFE IN ZARIA ================= */}
      <Section title="Vie à Zaria">
        <p>
          <span className="font-semibold">Samaru</span> et{" "}
          <span className="font-semibold">Zango</span> sont les quartiers les plus
          proches des institutions.
        </p>

        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Évitez de sortir après 22h.</li>
          <li>Soyez prudents avec les inconnus.</li>
          <li>Notre équipe vous aidera à trouver un logement sûr.</li>
        </ul>
      </Section>

      {/* ================= TRAINING ================= */}
      <Section title="Formations" accent="green">
        <p>Formations disponibles pour développer vos compétences :</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Menuiserie</li>
          <li>Couture</li>
          <li>Fabrication de chaussures</li>
          <li>Pâtisserie</li>
          <li>Makarantar Islamiyya</li>
          <li>Informatique de bureau (ASO)</li>
          <li>Réseau informatique (CISCO)</li>
        </ul>
      </Section>
    </main>
  );
}

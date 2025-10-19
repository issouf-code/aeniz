import React from "react";
import { Link } from "react-router-dom";

export default function Guide() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 px-6 sm:px-12 py-12 space-y-12">
      {/* ================= HEADER ================= */}
      <section className="text-center max-w-4xl mx-auto">
        <h1
  className="text-3xl sm:text-4xl font-bold mb-4"
  style={{ color: "#FF9933" }}
>
  Bienvenue dans le guide général des programmes disponibles et de la vie sociale à Zaria
</h1>


        <p className="text-lg text-gray-600">
          Ce guide a été conçu pour aider les nouveaux étudiants internationaux à comprendre les démarches,
          la vie à Zaria, et les programmes disponibles au Nigeria.
        </p>
      </section>

      {/* ================= TRADUCTION DES DOCUMENTS ================= */}
      <section className="bg-gradient-to-r from-orange-50 via-white to-green-50 shadow-sm rounded-2xl p-6 space-y-3 border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3">
          Traduction des documents
        </h2>
        <p className="text-gray-700">
          La traduction de chaque document se fait à <span className="font-semibold">5000 naira</span>,
          ce qui équivaut à environ <em>quelques dollars selon le taux du jour</em>.
        </p>
      </section>

      {/* ================= BAIN LINGUISTIQUE ================= */}
      <section className="bg-white rounded-2xl p-6 space-y-4 shadow border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-green-600 pl-3">
          Bain linguistique
        </h2>
        <p>Nous avons 3 à 4 centres de programmes de langue, qui sont :</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>IDRT Proficiency Program</li>
          <li>Centre de Zain</li>
          <li>Redemption College</li>
        </ul>
        <p>
          Les frais d'inscription varient entre <span className="font-semibold">50,000</span> et
          <span className="font-semibold"> 80,000 naira</span>, selon le centre choisi.
        </p>
        <p className="font-medium mt-2">Le programme de langue comprend les matières suivantes :</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Grammaire</li>
          <li>Vocabulaire</li>
          <li>Phonétique</li>
          <li>Traduction</li>
          <li>Communication</li>
          <li>Expression orale</li>
        </ul>
      </section>

      {/* ================= ABU ZARIA ================= */}
      <section className="bg-gradient-to-r from-orange-50 via-white to-green-50 shadow rounded-2xl p-6 space-y-4 border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3">
          ABU Zaria
        </h2>
        <p className="text-gray-700">
          Tout document doit être traduit avant d'entamer la procédure d’admission.
          Notez que tous les programmes de ABU ont des exigences précises selon le département choisi.
        </p>
        <p className="text-red-600 font-semibold">⚠️ IMPORTANT :</p>
        <p>
          Cliquez sur un lien ci-dessous pour consulter le guide et les critères d'admission :
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {[
            { label: "BACHELOR", path: "/table-ug" },
            { label: "MASTER", path: "/table-ms" },
            { label: "DOCTORAT (PhD)", path: "/table-ph" },
          ].map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="px-5 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* ================= AUTRES INSTITUTIONS ================= */}
      <section className="bg-white rounded-2xl shadow p-6 border border-gray-100">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-l-4 border-green-600 pl-3">
          Autres institutions
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            <span className="font-semibold">NITT</span> (Nigerian Institute of Transportation and Technology) — Institut des transports et logistique.
          </li>
          <li>
            <span className="font-semibold">NILEST</span> (Nigerian Institute of Leather Research Science and Technology) — Institut du cuir (très important pour notre pays).
          </li>
        </ul>
      </section>

      {/* ================= LOGEMENT ================= */}
      <section className="bg-gradient-to-r from-green-50 via-white to-orange-50 rounded-2xl shadow p-6 space-y-4 border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3">
          Logement à l'intérieur et à l'extérieur
        </h2>
        <p>
          Pour tout nouveau venu, nous avons une maison d'accueil où il sera logé pour
          <span className="font-semibold"> 4 jours</span> maximum, en attendant de trouver un logement.
        </p>
        <p>
          NB : Chaque nouveau venu doit payer un montant de
          <span className="font-semibold"> 5000 naira</span> pour l'accueil et la carte de membre.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Sans douche : 80,000 – 100,000 naira</li>
          <li>Avec douche : 100,000 – 600,000 naira</li>
        </ul>
        <p className="italic text-gray-600">NB : Les chambres sont vides.</p>
      </section>

      {/* ================= MATÉRIEL ESSENTIEL ================= */}
      <section className="bg-white rounded-2xl p-6 shadow border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 border-l-4 border-green-600 pl-3">
          Matériel de première nécessité
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Matelas</li>
          <li>Gaz / fourneau / réchaud</li>
          <li>Marmite</li>
          <li>Seau</li>
          <li>Autres (selon vos besoins)</li>
        </ul>
        <p className="mt-2 text-gray-700">
          💡 <span className="font-semibold">Conseils :</span> venir avec vos matériaux est un atout.
          Apporter du <em>goumba</em> pour <em>kounou</em> est fortement recommandé 😄.
        </p>
      </section>

      {/* ================= VIE À ZARIA ================= */}
      <section className="bg-gradient-to-r from-orange-50 via-white to-green-50 rounded-2xl shadow p-6 space-y-4 border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3">
          Vie à Zaria
        </h2>
        <p>
          <span className="font-semibold">Samaru</span> et <span className="font-semibold">Zango</span> sont les quartiers
          les plus proches des institutions citées à Zaria, Kaduna, Nigeria.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Évitez de sortir la nuit après 22h.</li>
          <li>Faites attention aux personnes inconnues, surtout les nouvelles rencontres.</li>
          <li>Notre équipe sera là pour vous aider à trouver un logement sûr.</li>
        </ul>
      </section>

      {/* ================= FORMATIONS ================= */}
      <section className="bg-white rounded-2xl p-6 shadow border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-green-600 pl-3">
          Formations
        </h2>
        <p>
          Nos experts vous guideront dans différents domaines pour développer vos compétences :
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Menuiserie</li>
          <li>Couture</li>
          <li>Fabrication de chaussures</li>
          <li>Pâtisserie</li>
          <li>Makarantar Islamiyya</li>
          <li>Informatique de bureau (ASO)</li>
          <li>Réseau informatique (CISCO)</li>
        </ul>
      </section>

      
    </main>
  );
}

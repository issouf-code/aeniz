import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

// Assets
import president from "../assets/president.jpg";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.JPG";
import image3 from "../assets/image3.JPG";
import image4 from "../assets/image4.JPG";

export default function Home() {
  // Memoized image list (prevents re-creation on every render)
  const images = useMemo(
    () => [image1, image2, image3, image4],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide (safe, minimal dependency)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="bg-gray-50 pb-16 space-y-12">
      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-6xl rounded-lg bg-gradient-to-r from-orange-500 via-white to-green-600 p-8 md:p-12 text-center shadow">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
          Bienvenue sur la page officielle de{" "}
          <span className="text-orange-700">
            l'Association des Étudiants Nigériens à Zaria
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-800">
          Une communauté d'étudiants unis par la diversité, la solidarité et le
          savoir.
        </p>

        <Link
          to="/about"
          className="mt-6 inline-block rounded-md bg-green-700 px-6 py-2 font-medium text-white transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          Découvrir plus
        </Link>
      </section>

      {/* ================= PRESIDENT ================= */}
      <section className="mx-auto max-w-6xl rounded-lg bg-white p-6 md:p-10 shadow">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <img
            src={president}
            alt="Président de l'association"
            loading="lazy"
            className="h-80 w-full rounded-lg object-cover md:w-1/2"
          />

          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="mb-4 border-l-4 border-green-600 pl-3 text-2xl md:text-3xl font-bold text-gray-800">
              Le président de l’Association
            </h2>
            <h3 className="mb-2 font-semibold text-orange-700">
              Président de l’AENIZ
            </h3>

            <p className="leading-relaxed text-gray-700">
              Bienvenue sur notre plateforme digitale. Cet espace accompagne
              votre parcours académique à Zaria et favorise la solidarité,
              l’excellence et le partage.
            </p>

            <p className="mt-4 italic text-gray-800">
              — Le Président
            </p>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="mx-auto max-w-6xl rounded-lg bg-white p-6 md:p-10 shadow">
        <h2 className="mb-4 border-l-4 border-orange-500 pl-3 text-xl md:text-2xl font-semibold text-gray-800">
          Galerie de l'association
        </h2>

        <p className="mb-6 text-gray-600">
          Quelques moments forts de nos activités.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img, idx) => (
            <figure
              key={img}
              className={`overflow-hidden rounded-lg transition ${
                idx === currentIndex
                  ? "ring-2 ring-green-500"
                  : "hover:shadow-md"
              }`}
            >
              <img
                src={img}
                alt={`Événement ${idx + 1}`}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="mx-auto max-w-6xl rounded-lg bg-gray-50 p-6 md:p-8 shadow-sm">
        <h2 className="mb-4 border-l-4 border-green-600 pl-3 text-xl md:text-2xl font-semibold text-gray-800">
          Notre mission
        </h2>
        <p className="leading-relaxed text-gray-700">
          Accompagner les étudiants étrangers au Nigeria, développer leurs
          compétences linguistiques, académiques et entrepreneuriales afin de
          former des leaders visionnaires.
        </p>
      </section>

      {/* ================= VISION ================= */}
      <section className="mx-auto max-w-6xl rounded-lg bg-white p-6 md:p-8 shadow">
        <h2 className="mb-4 border-l-4 border-orange-500 pl-3 text-xl md:text-2xl font-semibold text-gray-800">
          Notre vision
        </h2>
        <p className="leading-relaxed text-gray-700">
          Former des diplômés engagés capables de contribuer activement au
          développement de leurs communautés.
        </p>
      </section>
    </main>
  );
}

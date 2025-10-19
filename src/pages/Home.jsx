import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 🖼 Import assets
import president from "../assets/president.jpg";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.JPG";
import image3 from "../assets/image3.JPG";
import image4 from "../assets/image4.JPG";

export default function Home() {
  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🕒 Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col space-y-12 bg-gray-50 pb-16">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-lg shadow-md p-8 md:p-12 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
          Bienvenue sur la page officielle de{" "}
          <span className="text-orange-700">
            l'Association des Étudiants Nigerien à Zaria
          </span>
        </h1>

        <p className="mt-4 text-gray-800 max-w-2xl mx-auto">
          Une communauté d'étudiants unis par la diversité, la solidarité et le
          savoir. Découvrez notre mission, notre vision et nos valeurs.
        </p>

        <div className="mt-6">
          <Link
            to="/about"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-2 rounded-md transition duration-300 shadow-sm"
          >
            Découvrir plus
          </Link>
        </div>
      </section>

      {/* ================= PRESIDENT SECTION ================= */}
      <section className="bg-white p-6 md:p-10 rounded-lg shadow flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={president}
            alt="Président de l'association"
            className="w-full h-80 object-cover rounded-lg shadow-md border border-gray-200"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-l-4 border-green-600 pl-3 mb-4">
            Le président de l'Association des Étudiants Nigériens à Zaria
          </h2>
          <h3 className="text-lg font-semibold text-orange-700 mb-2">
            Président de l’AENIZ
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Salut tout le monde 👋, vous êtes les bienvenus sur notre plateforme
            digitale. Ce site est un espace créé pour vous accompagner dans votre
            parcours académique à Zaria, Kaduna, Nigeria. Nous croyons en la
            solidarité, l’excellence et le partage entre étudiants internationaux
            afin de bâtir une communauté unie et inspirante.
          </p>
          <p className="mt-4 text-gray-800 italic">
            — Le Président, Association des Étudiants Nigériens à Zaria
          </p>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="p-6 md:p-10 bg-white rounded-lg shadow max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-3 mb-6">
          Galerie de l'association
        </h2>
        <p className="text-gray-600 mb-6">
          Découvrez quelques moments forts de nos activités et événements récents.
        </p>

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`overflow-hidden rounded-lg shadow hover:shadow-md transition-transform hover:scale-105 duration-300 ${
                idx === currentIndex ? "ring-4 ring-green-400" : ""
              }`}
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-l-4 border-green-600 pl-3 mb-4">
          Notre mission
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Notre association regroupant des étudiants étrangers au Nigeria a pour
          mission d'accompagner et de guider les nouveaux étudiants souhaitant
          poursuivre leurs études dans ce pays, en les formant pour devenir des
          leaders visionnaires, en les aidant à maîtriser la langue anglaise et en
          les préparant à des programmes d'entrepreneuriat innovants.
        </p>
      </section>

      {/* ================= VISION SECTION ================= */}
      <section className="bg-white p-6 md:p-8 rounded-lg shadow max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-3 mb-4">
          Notre vision
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Notre vision est de former nos propres leaders qui, une fois diplômés,
          retourneront dans leur pays respectif pour contribuer au développement
          économique, social et culturel de leurs communautés.
        </p>
      </section>
    </div>
  );
}

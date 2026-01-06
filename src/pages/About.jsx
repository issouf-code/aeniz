import React, { useMemo } from "react";

import president from "../assets/president.jpg";
import vicePresident from "../assets/vice_president.jpg";
import secretaireGeneral from "../assets/secretaire_general.jpg";
import secretaireSportif from "../assets/secretaire_sportif.jpg";
import affaireAcademic from "../assets/affaire_academic.jpg";
import tresoriere from "../assets/tresoriere.jpg";
import communication from "../assets/communication.jpg";
import conseiller from "../assets/conseiller.jpg";

export default function About() {
  // Memoized data to avoid re-creation on each render
  const members = useMemo(
    () => [
      {
        id: "president",
        name: "Moutari Zakari Djibo",
        role: "Président de l’association",
        img: president,
      },
      {
        id: "vice-president",
        name: "Massalatchi Beido Beido Habibou",
        role: "Vice-président de l’association",
        img: vicePresident,
      },
      {
        id: "sg",
        name: "Ibrahim Boukar Issaka",
        role: "Secrétaire Général",
        img: secretaireGeneral,
      },
      {
        id: "communication",
        name: "Hachimou Zabeirou Mahamadou",
        role: "Secrétaire chargé de la presse",
        img: communication,
      },
      {
        id: "academic",
        name: "Ali Yahaya Ouzeifa",
        role: "Secrétaire chargé des affaires académiques",
        img: affaireAcademic,
      },
      {
        id: "academic-adjoint",
        name: "Abdoul Nassirou Samaila Ali",
        role: "Secrétaire chargé des affaires académiques adjoint",
        img: conseiller,
      },
      {
        id: "sport",
        name: "Ousmane Mohamed Ibrahim",
        role: "Secrétaire chargé des affaires sportives et culturelles",
        img: secretaireSportif,
      },
      {
        id: "treasurer",
        name: "Farida Harouna Ousseini",
        role: "Trésorière",
        img: tresoriere,
      },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* ================= HEADER ================= */}
      <header className="mx-auto max-w-4xl px-4 py-12 text-center">
        <h1 className="mb-4 text-3xl sm:text-4xl font-bold text-orange-600">
          À propos de notre association
        </h1>
        <p className="text-lg text-gray-700">
          Nous sommes une association affiliée à l’
          <span className="font-semibold text-green-600">
            Association des Étudiants Internationaux (ISA)
          </span>
          . Notre mission est d’unir les étudiants nigériens à Zaria autour de
          l’entraide, de l’intégration culturelle et du développement académique.
        </p>
      </header>

      {/* ================= EXECUTIVE TEAM ================= */}
      <section className="bg-white px-6 py-12 sm:px-12">
        <h2 className="mb-10 text-center text-2xl font-semibold text-green-700">
          Notre équipe exécutive
        </h2>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((member) => (
            <article
              key={member.id}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <img
                src={member.img}
                alt={member.name}
                loading="lazy"
                className="mx-auto mb-4 h-32 w-32 rounded-full object-cover border-2 border-green-600"
              />

              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= FOOTER NOTE ================= */}
      <section className="bg-gray-50 px-4 py-10 text-center">
        <p className="mx-auto max-w-2xl text-gray-700">
          Ensemble, nous construisons une communauté internationale fondée sur la
          solidarité, la diversité et l’excellence académique.
        </p>
      </section>
    </main>
  );
}

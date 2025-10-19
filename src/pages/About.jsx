import React from "react";
import president from "../assets/president.jpg";
import vicePresident from "../assets/vice_president.jpg";
import secretaireGeneral from "../assets/secretaire_general.jpg";
import secretaireSportif from "../assets/secretaire_sportif.jpg";
import affaireAcademic from "../assets/affaire_academic.jpg";
import tresoriere from "../assets/tresoriere.jpg";
import communication from "../assets/communication.jpg";
import conseiller from "../assets/conseiller.jpg";

export default function About() {
  const members = [
    {
      name: "Moutari Zakari Djibo",
      role: "Président de l’association",
      img: president,
    },
    {
      name: "Massalatchi Beido Beido Habibou",
      role: "Vice-président de l’association",
      img: vicePresident,
    },
    {
      name: "Ibrahim Boukar Issaka",
      role: "Secrétaire Général",
      img: secretaireGeneral,
    },
    {
      name: "Hachimou Zabeirou Mahamadou",
      role: "Secrétaire chargé de la Press",
      img: communication,
    },
    {
      name: "Ali Yahaya Ouzeifa",
      role: "Secrétaire chargé des affaires académiques",
      img: affaireAcademic,
    },
    {
      name: "Abdoul Nassirou Samaila Ali",
      role: "Secrétaire chargé des affaires académiques Adjoint",
      img: conseiller,
    },
    {
      name: "Ousmane Mohamed Ibrahim",
      role: "Secrétaire chargé des affaires sportives et culturelles",
      img: secretaireSportif,
    },
    {
      name: "Farida Harouna Ousseini",
      role: "Trésorière",
      img: tresoriere,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-green-50 text-gray-800">
      {/* Header Section */}
      <section className="text-center py-12 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-orange-600">
          À propos de notre association
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Nous sommes une association sous l’{" "}
          <span className="font-semibold text-green-600">
            Association des Étudiants Nigériens à Zaria (AENIZ)
          </span>
          . Notre mission est d’unir les étudiants nigériens à Zaria sous un même
          cadre d’entraide, d’intégration culturelle et de développement académique.
        </p>
      </section>

      {/* Executive Members Section */}
      <section className="py-12 px-6 sm:px-12 bg-white/70 backdrop-blur-sm">
        <h2 className="text-2xl font-semibold text-center text-green-700 mb-10">
          Notre équipe exécutive
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {members.map((member, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center border-t-4 border-orange-400"
            >
              <img
                src={member.img}
                alt={member.role}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-green-500 shadow-md"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Footer Note */}
      <section className="text-center py-10 px-4 bg-gradient-to-r from-orange-100 via-white to-green-100">
        <p className="text-gray-700 max-w-2xl mx-auto">
          Ensemble, nous formons une communauté internationale unie par la diversité, 
          la solidarité et la recherche de l’excellence académique.
        </p>
      </section>
    </main>
  );
}

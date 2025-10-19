import React from "react";

const TableMS = () => {
  const sections = [
    {
      title: "FACULTÉ DE SCIENCE",
      data: [
        ["Mathématiques", "Data 1", "Data 1"],
        ["Informatique", "Data 2", "Data 2"],
        ["Physique", "Data 3", "Data 3"],
        ["Chimie", "Data 4", "Data 4"],
        ["Statistique", "Data 5", "Data 5"],
        ["Géologie", "Data 6", "Data 6"],
      ],
    },
    {
      title: "FACULTÉ DE GESTION / ADMINISTRATION",
      data: [
        ["Comptabilité", "Data 1", "Data 1"],
        ["Banque et Finance", "Data 2", "Data 2"],
        ["Marketing", "Data 3", "Data 3"],
        ["Gestion d’Entreprise", "Data 4", "Data 4"],
        ["Économie", "Data 5", "Data 5"],
      ],
    },
    {
      title: "FACULTÉ D’INGÉNIERIE",
      data: [
        ["Génie Civil", "Data 1", "Data 1"],
        ["Génie Électrique", "Data 2", "Data 2"],
        ["Génie Mécanique", "Data 3", "Data 3"],
        ["Génie Chimique", "Data 4", "Data 4"],
        ["Télécommunication", "Data 5", "Data 5"],
      ],
    },
    {
      title: "SCIENCE SOCIALE",
      data: [
        ["Science Politique", "Data 1", "Data 1"],
        ["Sociologie", "Data 2", "Data 2"],
        ["Études Internationales", "Data 3", "Data 3"],
        ["Développement Communautaire", "Data 4", "Data 4"],
      ],
    },
    {
      title: "SCIENCE DE L'ÉDUCATION",
      data: [
        ["Psychologie de l’Éducation", "Data 1", "Data 1"],
        ["Planification de l’Éducation", "Data 2", "Data 2"],
        ["Administration de l’Éducation", "Data 3", "Data 3"],
        ["Formation des Enseignants", "Data 4", "Data 4"],
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        PROGRAMMES DE MASTER (POSTGRADUATE)
      </h1>

      {sections.map((section, index) => (
        <div key={index} className="mb-10 bg-white rounded-2xl shadow p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">
            {section.title}
          </h2>
          <table className="w-full border border-gray-300 text-left text-sm">
            <thead className="bg-blue-100 text-gray-700">
              <tr>
                <th className="p-2 border">S/N</th>
                <th className="p-2 border">Départements</th>
                <th className="p-2 border">Relever Licence</th>
                <th className="p-2 border">Relever Master</th>
              </tr>
            </thead>
            <tbody>
              {section.data.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-2 border text-center">{i + 1}</td>
                  <td className="p-2 border">{row[0]}</td>
                  <td className="p-2 border">{row[1]}</td>
                  <td className="p-2 border">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default TableMS;

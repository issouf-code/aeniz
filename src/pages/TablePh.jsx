import React from "react";

const TablePh = () => {
  const sections = [
    {
      title: "FACULTÉ DE SCIENCE",
      data: [
        ["Mathématiques Appliquées", "Data 1", "Data 1"],
        ["Informatique Avancée", "Data 2", "Data 2"],
        ["Physique Théorique", "Data 3", "Data 3"],
        ["Chimie Organique", "Data 4", "Data 4"],
      ],
    },
    {
      title: "FACULTÉ DE MÉDECINE ET SANTÉ",
      data: [
        ["Médecine", "Data 1", "Data 1"],
        ["Santé Publique", "Data 2", "Data 2"],
        ["Pharmacologie", "Data 3", "Data 3"],
        ["Biotechnologie Médicale", "Data 4", "Data 4"],
      ],
    },
    {
      title: "FACULTÉ DE GESTION ET ADMINISTRATION",
      data: [
        ["Finance et Économie", "Data 1", "Data 1"],
        ["Gestion des Organisations", "Data 2", "Data 2"],
        ["Management Stratégique", "Data 3", "Data 3"],
        ["Entrepreneuriat et Innovation", "Data 4", "Data 4"],
      ],
    },
    {
      title: "SCIENCE SOCIALE ET POLITIQUE",
      data: [
        ["Relations Internationales", "Data 1", "Data 1"],
        ["Sociologie Avancée", "Data 2", "Data 2"],
        ["Développement Économique", "Data 3", "Data 3"],
      ],
    },
    {
      title: "INGÉNIERIE ET TECHNOLOGIE",
      data: [
        ["Génie Civil", "Data 1", "Data 1"],
        ["Énergie et Environnement", "Data 2", "Data 2"],
        ["Intelligence Artificielle", "Data 3", "Data 3"],
        ["Génie Informatique", "Data 4", "Data 4"],
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        PROGRAMMES DE DOCTORAT (PhD)
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
                <th className="p-2 border">Relever Master</th>
                <th className="p-2 border">Relever Doctorat</th>
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

export default TablePh;

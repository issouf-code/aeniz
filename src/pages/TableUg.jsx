import React from "react";

const TableUG = () => {
  const sections = [
    {
      title: "ECOLE DE BUSINESS",
      data: [
        ["Comptabilité", "Avoir des moyennes en Anglais, Économie, Mathématiques et deux (2) autres matières pertinente", "Doit avoir une moyenne en Économie et Gestion ou en Comptabilité."],
        ["Marketing", "Doit avoir une moyenne en Anglais, Économie, Mathématiques et deux (2) autres matières.", " Doit avoir une moyenne dans les matières de Gestion ou des Sciences Sociales, dont l’une doit être l’Économie. "],
        ["Banque et Finance", "Doit avoir une moyenne en Anglais, Économie, Mathématiques et deux (2) autres matières.", "Doit avoir une moyenne dans les matières de Gestion ou des Sciences Sociales, dont l’une doit être l’Économie."],
        ["Gestion de Business", "Doit avoir une moyenne en Anglais, Économie, Mathématiques et deux (2) autres matières.", "Doit avoir une moyenne dans les matières de Gestion ou des Sciences Sociales, dont l’une doit être l’Économie."],
        ["Science Actuarielle", "Doit avoir une moyenne en Anglais, Économie, Mathématiques et deux (2) autres matières.", "Doit avoir une moyenne dans les matières de Gestion ou des Sciences Sociales, dont l’une doit être l’Économie."],
        ["Économie", "Doit avoir une moyenne en Anglais, Mathématiques et Économie, ainsi qu’en deux (2) autres matières des Arts, des Sciences Sociales ou de la Gestion.", "Doit avoir une moyenne, dont l’une doit être en Économie."],
        ["Assurance", "Doit avoir une moyenne en Anglais, Économie, Mathématiques et deux (2) autres matières.", "Doit avoir une moyenne dans les matières de Gestion ou des Sciences Sociales, dont l’une doit être l’Économie."],
      ],
    },
    {
  title: "FACULTÉ D'ADMINISTRATION",
  data: [
    [
      "Administration Publique",
      "Doit avoir une moyenne en Anglais, en Gouvernement ou Histoire, en Économie, en Mathématiques et en une (1) matière en Gestion, Arts ou Sciences Sociales.",
      "Doit avoir une moyenne en Économie et en Gouvernement ou Histoire."
    ],
    [
      "Gouvernement Local et Études de Développement",
      "Doit avoir une moyenne en Anglais, en Gouvernement ou Histoire, en Économie et en deux (2) autres matières. Doit avoir au moins une moyenne en Mathématiques.",
      "Doit avoir une moyenne, dont l’une doit être en Gouvernement ou en Histoire."
    ],
  ],
},

    {
  title: "FACULTÉ DES LETTRES ET DES ARTS",
  data: [
    [
      "Arabe",
      "Cinq (5) moyennes au niveau O en Arabe, Anglais et trois (3) autres matières des Arts ou des Sciences Sociales.",
      "1) Deux passes au niveau ‘A’ / IJMB comprenant l’Arabe à l’IJMB / NCE, ou un minimum de Mention Mérite au Diplôme en Arabe ou dans d’autres matières."
    ],
    [
      "Archéologie",
      "Cinq (5) moyennes au niveau O comprenant la Langue anglaise et d’autres matières des Sciences, Arts ou Sciences Sociales.",
      "1) Deux passes au niveau ‘A’ / IJMB en Géographie, Biologie, Histoire ou toute autre matière pertinente.\n2) NCE avec un minimum de Mention Mérite.\n3) Diplôme ABU dans des matières connexes."
    ],
    [
      "Langue anglaise",
      "Cinq (5) moyennes au niveau O comprenant la Littérature en anglais, la Langue anglaise et toute autre matière des Arts ou des Sciences Sociales. Les candidats titulaires d’un Diplôme doivent également posséder une moyenne en Littérature en anglais.",
      "Deux passes au niveau ‘A’ / IJMB, y compris l’Anglais à l’IJMB / NCE, ou un minimum de Mention Mérite au Diplôme."
    ],
    [
      "Littérature anglaise",
      "Cinq (5) moyennes au niveau O comprenant la Littérature en anglais et la Langue anglaise. Le cours général d’Anglais/Utilisation de l’Anglais au NCE satisfait à l’exigence d’Anglais au niveau O.",
      "Deux passes au niveau ‘A’ / IJMB, y compris l’Anglais à l’IJMB / NCE, ou un minimum de Mention Mérite au Diplôme. Les candidats titulaires d’un Diplôme doivent également posséder une moyenne en Littérature en anglais."
    ],
    [
      "Français",
      "Cinq (5) moyennes au niveau O comprenant la Langue anglaise, le Français et deux (2) autres matières des Arts ou des Sciences Sociales.",
      "Deux passes au niveau ‘A’ / IJMB, y compris le Français à l’IJMB / NCE, ou un minimum de Mention Mérite au Diplôme en Français ou avec d’autres matières des Arts / Sciences Sociales."
    ],
    [
      "Hausa",
      "Cinq (5) moyennes au niveau O en Hausa, Anglais et trois (3) autres matières des Arts ou des Sciences Sociales.",
      "Deux passes au niveau ‘A’ / IJMB, y compris le Hausa à l’IJMB / NCE, ou un minimum de Mention Mérite au Diplôme en Hausa ou avec d’autres matières. Le cours général d’Anglais/Utilisation de l’Anglais au NCE satisfait à l’exigence d’Anglais au niveau O."
    ],
    [
      "Histoire",
      "Cinq (5) moyennes au niveau O comprenant la Langue anglaise, l’Histoire ou le Gouvernement.",
      "Deux passes au niveau ‘A’ / IJMB, y compris l’Histoire à l’IJMB ou au NCE. Le cours général d’Anglais/Utilisation de l’Anglais au NCE satisfait à l’exigence d’Anglais au niveau O."
    ],
    [
      "Théâtre et Arts du Spectacle",
      "Cinq (5) moyennes au niveau O comprenant la Littérature en anglais, la Langue anglaise et deux (2) autres matières des Arts ou des Sciences Sociales.",
      "Deux passes au niveau ‘A’ / IJMB en Anglais, Arts du Spectacle, Journalisme, Communication de masse, Arts créatifs, Musique et Danse, Littérature en anglais ou toute langue nigériane à l’IJMB / NCE, ou un minimum de Mention Mérite au Diplôme. Les candidats titulaires d’un Diplôme doivent également posséder une moyenne en Littérature en anglais."
    ],
  ],
},


   
    {
  title: "FACULTÉ D'ÉDUCATION",
  data: [
    [
      "Étude de la Religion Islamique",
      "1) NCE avec une note minimale de « C » en Études Islamiques et Éducation.\n2) IJMB avec au moins la note « E » dans les trois matières incluant les Études Islamiques.\n3) Diplôme ABU en Études Islamiques avec au moins la mention « Mérite ».\n4) ND en Études Islamiques d'une institution reconnue avec au moins la mention « Crédit inférieur ».",
      "Cinq (5) crédits au niveau O, incluant la Langue anglaise et les Études Islamiques."
    ],
    [
      "Étude de la Religion Chrétienne",
      "1) NCE avec une note minimale de « C » en CRS et Éducation.\n2) IJMB avec au moins la note « E » dans les trois matières incluant le CRS.\n3) Diplôme ABU en CRS avec au moins la mention « Mérite ».\n4) ND en CRS d'une institution reconnue avec au moins la mention « Crédit inférieur ».",
      "Cinq (5) crédits au niveau O, incluant la Langue anglaise et le CRS."
    ],
    [
      "Éducation de Mathématiques",
      "1) NCE avec une note minimale de « C » en Éducation et Mathématiques.\n2) IJMB avec au moins la note « D » en Mathématiques et « E » dans les deux autres matières.\n3) ND avec au moins la mention « Mérite » en Mathématiques.\n4) Diplôme supérieur ABU avec au moins la mention « Mérite » en Éducation Mathématique.",
      "Cinq (5) crédits au niveau O, incluant la Langue anglaise et les Mathématiques."
    ],
    [
      "Éducation de Chimie",
      "1) NCE avec une note « C » en Éducation et Chimie.\n2) IJMB ou ‘A’ Level avec au moins la note « C » en Chimie et « D » dans une autre matière scientifique.\n3) TC II avec crédit en Sciences intégrées.\n4) Diplôme ABU en Éducation Chimie avec mention « Mérite ».",
      "Cinq (5) crédits au niveau O, incluant la Langue anglaise, Mathématiques, Chimie et Biologie, plus Physique ou Géographie."
    ],
    [
      "Éducation de Géographie",
      "1) NCE avec note minimale de « C » en Éducation et Géographie.\n2) IJMB ou ‘A’ Level avec au moins « C » en Géographie et « D » dans une autre matière scientifique ou Économie.\n3) Diplôme ABU en Éducation Géographie avec mention « Mérite ».",
      "Cinq (5) crédits au niveau O, incluant Géographie, Mathématiques, Langue anglaise et une autre matière parmi Chimie, Physique ou Biologie."
    ],
    [
      "Éducation de Biologie",
      "1) NCE avec note « C » en Éducation et Biologie.\n2) IJMB ou ‘A’ Level avec « C » en Biologie et « D » dans une autre matière scientifique parmi Chimie, Physique, Sciences intégrées ou Géographie.\n3) Diplôme ABU en Éducation Biologie avec mention « Mérite ».",
      "Cinq (5) crédits au niveau O, incluant Biologie, Mathématiques, Langue anglaise, Chimie et une autre matière parmi Physique ou Géographie."
    ],
    [
      "Science Intégrée",
      "1) NCE avec note « C » en Éducation et Science Intégrée.\n2) IJMB ou ‘A’ Level avec au moins « C » en Physique et « D » dans une autre matière scientifique.\n3) Diplôme ABU en Science Intégrée ou Éducation Physique avec mention « Mérite ».",
      "Cinq (5) crédits au niveau O, incluant Langue anglaise, Mathématiques, Physique, Chimie et Biologie."
    ],
    [
      "Éducation de Physique",
      "1) NCE avec note « C » en Éducation et Physique.\n2) IJMB ou ‘A’ Level avec « C » en Physique et « D » dans une autre matière scientifique parmi Chimie, Biologie, Sciences intégrées ou Géographie.\n3) Diplôme ABU en Éducation Physique avec mention « Mérite ».",
      "Cinq (5) crédits au niveau O, incluant Physique, Mathématiques, Langue anglaise, Chimie et une autre matière scientifique."
    ],
    [
      "Économie de Maison",
      "1) Diplôme ABU en Économie de Maison avec au moins Crédit Supérieur.\n2) NCE Mérite en Économie de Maison et Éducation.\n3) Diplôme Supérieur ABU en Économie de Maison avec Crédit inférieur.",
      "Cinq (5) crédits au niveau O, incluant Mathématiques, Langue anglaise, Économie de Maison, Biologie, Géographie, Physique ou Chimie. Un sujet d’Économie de Maison est requis : Alimentation et Nutrition, Gestion du Foyer, ou Textile et Habillement."
    ],
    [
      "Éducation d’Agriculture",
      "1) NCE avec note minimale « C » en Sciences Agricoles.\n2) ND en Agriculture avec Crédit inférieur / Mérite.\n3) Deux passes ‘A’ Level / IJMB en Sciences Agricoles et une des matières suivantes : Biologie, Chimie, Physique ou Géographie.",
      "Cinq (5) crédits au niveau O, incluant Langue anglaise, Mathématiques, Chimie et Biologie ou Sciences Agricoles, Sciences intégrées / Sciences générales, Géographie."
    ],
    [
      "Éducation de Business",
      "1) NCE avec au moins mention Mérite en Éducation commerciale et Éducation.\n2) Deux passes IJMB en Économie, Gestion commerciale, Comptabilité ou matières connexes.\n3) Diplôme ABU avec mention Mérite dans une discipline connexe.",
      "Cinq (5) crédits au niveau O, incluant Langue anglaise, Mathématiques et deux matières commerciales."
    ],
    [
      "Bibliothèque et Science de l’Information",
      "1) « A » Level / IJMB dans au moins deux matières.\n2) Diplôme ABU en Bibliothèque et Science de l’Information avec au moins Mention Mérite.\n3) NCE avec mention Mérite dans deux matières incluant l’Éducation.",
      "Cinq (5) crédits au niveau O, incluant Langue anglaise et Mathématiques, plus trois autres matières."
    ],
    [
      "Éducation de Hausa",
      "1) ‘A’ Level / IJMB dans au moins deux matières incluant le Hausa.\n2) Diplôme ABU en Hausa avec mention Mérite.\n3) NCE avec note minimale « C » en Hausa.",
      "Cinq (5) crédits au niveau O, incluant Langue anglaise et Hausa."
    ],
    [
      "Éducation d’Arabe",
      "1) ‘A’ Level / IJMB dans au moins deux matières incluant l’Arabe.\n2) Diplôme ABU en Arabe et Études Islamiques avec mention Mérite.\n3) NCE avec note minimale « C » en Arabe.",
      "Cinq (5) crédits au niveau O, incluant Langue anglaise et Arabe."
    ],
    [
      "Éducation d’Étude Sociale",
      "1) ‘A’ Level / IJMB dans au moins deux matières incluant Études Sociales.\n2) Diplôme ABU en Arts et Sciences Sociales avec mention Mérite.\n3) NCE avec note minimale « C » en Études Sociales.",
      "Cinq (5) crédits au niveau O, incluant Langue anglaise et Sciences Sociales."
    ],
    [
      "Cinétique Humaine et Éducation de la Santé",
      "1) NCE dans deux matières principales incluant Éducation Physique ou Santé.\n2) Deux passes ‘A’ Level / IJMB en matières scientifiques : Chimie, Physique, Biologie, Mathématiques.\n3) Diplôme ABU avec mention Mérite en Éducation Physique et Santé.",
      "Cinq (5) crédits au niveau O, incluant Langue anglaise, Mathématiques et une matière scientifique parmi Biologie, Chimie ou Physique."
    ],
    [
      "Conseil de Guidance, Planification Administrative et Éducation d’Adulte",
      "1) Diplôme ABU en Guidance et Counseling avec au moins Mention Mérite.\n2) NCE avec Mérite en Éducation et C dans une des matières du programme.\n3) Deux passes ‘A’ Level / IJMB dans n’importe deux matières.",
      "Cinq (5) crédits au niveau O, incluant Langue anglaise et Mathématiques."
    ],
    [
      "Éducation d’Informatique",
      "1) Diplôme supérieur et diplôme ABU en Informatique, Statistique ou Éducation Mathématique avec mention Mérite.\n2) NCE avec Mérite en Éducation et Informatique.\n3) Deux passes ‘A’ Level / IJMB en Mathématiques et Physique.",
      "Cinq (5) crédits au niveau O, incluant Mathématiques, Langue anglaise et trois autres matières scientifiques."
    ]
  ]
},

    {
  title: "FACULTÉ D'INGÉNIERIE",
  data: [
    [
      "Génie Agricole et Bioculture",
      "1) Deux passes ‘A’ Level / IJMB en Mathématiques et Physique ou Chimie.\n2) ND avec au moins Crédit supérieur en Génie Agricole d'une institution accréditée.\n3) HND avec Crédit inférieur en Génie Agricole d'une institution accréditée.",
      "Cinq (5) crédits au niveau O, incluant Langue anglaise, Mathématiques, Physique, Chimie et une autre matière scientifique (incluant Économie, Dessin technique, Travail des métaux et Bois)."
    ],
    [
      "Pétrochimie",
      "1) Deux passes ‘A’ Level / IJMB en Mathématiques et Chimie ou Physique.\n2) ND avec Crédit supérieur en Génie Chimique d'une institution accréditée.\n3) HND avec Crédit inférieur en Génie Chimique d'une institution accréditée.",
      "Cinq (5) crédits au niveau O, incluant Langue anglaise, Mathématiques, Physique, Chimie et une autre matière scientifique (incluant Économie, Dessin technique, Travail des métaux et Bois)."
    ],
    [
      "Génie Civil",
      "1) Deux passes ‘A’ Level / IJMB incluant Mathématiques, Chimie ou Physique.\n2) ND en Génie Civil avec Crédit supérieur d'une institution accréditée.\n3) HND en Génie Civil avec au moins Crédit inférieur d'une institution accréditée.",
      "Cinq (5) crédits au niveau O, incluant Langue anglaise, Mathématiques, Physique, Chimie et une autre matière scientifique (incluant Économie, Dessin technique, Travail des métaux et Bois)."
    ],
    [
      "Génie Électrique / Informatique / Télécommunication",
      "1) Deux passes ‘A’ Level / IJMB incluant Physique et Mathématiques.\n2) ND ou équivalent en Génie Électrique ou domaine pertinent avec Crédit supérieur.\n3) HND avec Crédit inférieur en Génie Électrique d'une institution accréditée.\n4) Diplôme ABU en Génie Informatique avec Mention Mérite.",
      "Cinq (5) crédits au niveau O, incluant Langue anglaise, Mathématiques, Physique, Chimie et une autre matière scientifique (incluant Économie, Dessin technique, Travail des métaux et Bois)."
    ],
    [
      "Génie Mécanique / Automobile / Mécatronique",
      "1) Deux passes ‘A’ Level / IJMB en Mathématiques et Physique.\n2) ND en Génie Mécanique avec Crédit supérieur et Distinction en Mathématiques.\n3) HND avec Crédit inférieur en Génie Mécanique d'une institution accréditée.",
      "Cinq (5) crédits au niveau O, incluant Langue anglaise, Mathématiques, Physique, Chimie et une autre matière scientifique."
    ],
    [
      "Métallurgie / Matériaux / Mines",
      "1) Deux passes ‘A’ Level / IJMB en Mathématiques et Physique ou Chimie.\n2) ND en Génie Métallurgique et des Matériaux ou domaine connexe avec Crédit supérieur.\n3) HND en Génie Métallurgique et des Matériaux ou domaine connexe avec Crédit inférieur.",
      "Cinq (5) crédits au niveau O, incluant Langue anglaise, Mathématiques, Physique, Chimie et une autre matière scientifique."
    ],
    [
      "Hydraulique et Environnemental",
      "1) Deux passes ‘A’ Level / IJMB en Mathématiques, Physique ou Chimie.\n2) ND avec Crédit supérieur en Ressources en Eau ou Génie Civil ou domaine connexe.\n3) HND avec Crédit inférieur en Ressources en Eau ou Génie Civil ou domaine connexe.",
      "Cinq (5) crédits au niveau O, incluant Langue anglaise, Mathématiques, Chimie, Physique et une autre matière scientifique."
    ],
    [
      "Textile et Polymère",
      "1) Deux passes ‘A’ Level / IJMB en Chimie et Mathématiques ou Physique.\n2) ND en Génie des Polymères ou domaine connexe.\n3) HND en Génie des Polymères ou domaine connexe.",
      "Cinq (5) crédits au niveau O, incluant Langue anglaise, Mathématiques, Physique, Chimie et une autre matière scientifique (incluant Économie, Dessin technique, Travail des métaux et Bois)."
    ]
  ]
}
,
    {
  title: "FACULTÉ DE DESSIN ENVIRONNEMENTAL",
  data: [
    [
      "Architecture",
      "1) Deux passes ‘A’ Level / IJMB incluant Physique et Mathématiques.\n2) HND en Architecture avec au moins Crédit inférieur d'une institution accréditée.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Physique et Mathématiques, plus deux parmi : Géographie, Beaux-Arts, Dessin technique, Travail du bois/métal, Biologie, Chimie, Économie."
    ],
    [
      "Bâtiment",
      "1) Deux passes ‘A’ Level / IJMB en Mathématiques et Physique plus une matière parmi Chimie, Biologie, Économie, Géographie ou Beaux-Arts.\n2) ND en Bâtiment avec Crédit supérieur.\n3) HND en Bâtiment avec Crédit inférieur.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques et Physique, plus deux parmi : Chimie, Biologie, Beaux-Arts, Dessin technique, Économie, Mathématiques supplémentaires."
    ],
    [
      "Beaux-Arts",
      "1) Deux passes ‘A’ Level / IJMB en Beaux-Arts et une autre matière.\n2) NCE avec au moins Mention Mérite en Beaux-Arts.\n3) HND en Beaux-Arts, Théâtre ou domaine connexe avec Crédit inférieur.",
      "Cinq (5) crédits au niveau O dont deux doivent inclure Langue anglaise et Beaux-Arts.",
      "Usage de l’anglais, Beaux-Arts et deux autres matières."
    ],
    [
      "Géomatique",
      "1) Deux passes ‘A’ Level / IJMB en Mathématiques et une parmi Physique, Chimie ou Géographie.\n2) ND avec Crédit supérieur en Topographie / Géomatique, Géoinformatique, Génie Civil, Physique/Mathématiques, Bâtiment.\n3) HND avec Crédit inférieur en Topographie / Géomatique, Génie Civil.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Physique, Chimie ou Géographie et une autre matière scientifique.",
      "Usage de l’anglais, Mathématiques, Physique et Chimie ou Géographie."
    ],
    [
      "Métrée (Quantity Surveying)",
      "1) Deux passes ‘A’ Level / IJMB en Mathématiques et Physique.\n2) ND avec Crédit supérieur en Métrée.\n3) HND avec Crédit inférieur en Métrée d'une institution accréditée.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Physique plus deux parmi : Chimie, Économie, Géographie, Dessin technique, Biologie, Commerce, Travail du bois, Construction.",
      "Usage de l’anglais, Mathématiques, Physique et l’une parmi Chimie, Économie et Géographie."
    ],
    [
      "Dessin Industriel",
      "1) Deux passes ‘A’ Level / IJMB en Beaux-Arts et une autre matière.\n2) NCE avec Mention Mérite incluant Beaux-Arts.\n3) Diplôme ABU en Dessin Industriel avec Mention Mérite.\n4) ND avec Crédit supérieur en Dessin Industriel / Beaux-Arts ou domaine connexe.\n5) HND avec Crédit inférieur en Dessin Industriel / Beaux-Arts ou domaine connexe.\n6) HND avec Crédit inférieur en Textile, Habillement et Mode.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Beaux-Arts/Dessin technique/Arts visuels/Mode/Peinture et Décoration/Impression/Céramique et trois autres matières avec au moins une moyenne en Mathématiques.",
      "Usage de l’anglais, Beaux-Arts et deux autres matières."
    ],
    [
      "Technologie du Verre et des Silicates",
      "Admission spéciale en 300L :\n1) Deux passes ‘A’ Level / IJMB en Chimie et une parmi Mathématiques, Physique et Géologie.\n2) Diplôme ABU en Technologie du Verre et Technologie de Laboratoire Scientifique avec au moins Mérite.\n3) ND en Technologie du Verre, Céramique, Science de Laboratoire (SLT) Chimie/Biochimie, Traitement Minier, Génie Chimique/Mécanique/Électrique/Métallurgique ou Science des Matériaux avec Crédit supérieur.",
      "Admission spéciale en 300L : HND ou équivalent dans les mêmes domaines avec moyenne B d'une institution reconnue."
    ],
    [
      "Urbanisme et Plan Régional",
      "1) Deux passes ‘A’ Level / IJMB en Géographie et Économie ou Mathématiques.\n2) ND avec Crédit supérieur en Urbanisme et Planification Régionale ou Sciences Environnementales connexes.\n3) HND en URP ou Sciences Environnementales connexes avec Crédit inférieur.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques et Géographie plus deux parmi : Économie, Dessin technique, Beaux-Arts, Chimie et Biologie.",
      "Usage de l’anglais, Mathématiques, Géographie et toute autre matière."
    ]
  ]
}
,
    {
  title: "FACULTÉ DE DROIT",
  data: [
    [
      "Droit Civil",
      "1) Deux passes ‘A’ Level / IJMB en Littérature anglaise et autres matières des Arts ou Sciences Sociales.\n2) Diplôme ABU en Droit avec au moins Mention Mérite.\n3) Diplôme ABU en Shari’ah et Droit Civil avec au moins Mention Mérite.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Littérature en anglais et trois autres matières des Arts ou Sciences Sociales.\nUsage de l’anglais, Littérature en anglais et deux autres matières des Arts ou Sciences Sociales."
    ],
    [
      "LLB (Spécialisation en Droit Islamique)",
      "1) Deux passes ‘A’ Level / IJMB en IRK/Arabe et autres matières des Arts ou Sciences Sociales.\n2) Diplôme ABU en Shari’ah et Droit Civil avec au moins Mention Mérite.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Arabe/Études Islamiques et trois autres matières des Arts ou Sciences Sociales.\nUsage de l’anglais, IRK/Arabe et deux autres matières des Arts ou Sciences Sociales."
    ]
  ]
}
,
    
    {
  title: "FACULTÉ DE SCIENCE DE LA VIE",
  data: [
    [
      "Biochimie",
      "Passes ‘A’ Level / IJMB en Chimie et Physique ou Mathématiques.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Biologie, Chimie et Physique.\nUsage de l’anglais, Biologie, Chimie et Physique."
    ],
    [
      "Biologie",
      "Deux passes ‘A’ Level / IJMB incluant Biologie, Botanique ou Zoologie et Chimie en plus des exigences O’ Level.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Biologie, Chimie et Physique.\nUsage de l’anglais, Biologie, Chimie et Physique."
    ],
    [
      "Botanique",
      "Deux passes ‘A’ Level / IJMB incluant Biologie, Botanique ou Zoologie et Chimie en plus des exigences O’ Level.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Biologie, Chimie et Physique.\nUsage de l’anglais, Biologie, Chimie et Physique."
    ],
    [
      "Microbiologie",
      "Deux passes ‘A’ Level / IJMB en Chimie et Biologie en plus des exigences O’ Level.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Biologie, Chimie et Physique.\nUsage de l’anglais, Physique, Chimie et Biologie."
    ],
    [
      "Zoologie",
      "Deux passes ‘A’ Level / IJMB incluant Biologie, Botanique ou Zoologie et Chimie en plus des exigences O’ Level.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Biologie, Chimie et Physique.\nUsage de l’anglais, Biologie, Chimie et Physique."
    ]
  ]
}
,
    {
  title: "COLLÈGE DE SCIENCE DE LA SANTÉ",
  data: [
    [
      "Maîtrise en Médecine et Chirurgie (MBBS)",
      "Passes ‘A’ Level / IJMB dans trois matières : Physique, Chimie et Biologie ou Zoologie.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Physique, Chimie et Biologie.\nUsage de l’anglais, Physique, Chimie et Biologie."
    ],
    [
      "Physiologie Humaine",
      "Passes ‘A’ Level / IJMB dans trois matières : Physique, Chimie et Biologie ou Zoologie.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Physique, Chimie et Biologie.\nUsage de l’anglais, Physique, Chimie et Biologie."
    ],
    [
      "Anatomie Humaine",
      "Passes ‘A’ Level / IJMB dans trois matières : Physique, Chimie et Biologie ou Zoologie.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Physique, Chimie et Biologie.\nUsage de l’anglais, Physique, Chimie et Biologie."
    ],
    [
      "Science Infirmière",
      "1) Passes ‘A’ Level / IJMB dans trois matières : Physique, Chimie et Biologie ou Zoologie.\n2) Certificat d’Infirmier Diplômé (RN) avec au moins 5 crédits en Anglais, Mathématiques, Biologie, Physique et Chimie.\n3) Certificat de Sages-femmes Diplômé.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Physique, Chimie et Biologie.\nUsage de l’anglais, Physique, Chimie et Biologie."
    ],
    [
      "Chirurgie Dentaire",
      "Passes ‘A’ Level / IJMB dans trois matières : Physique, Chimie et Biologie ou Zoologie.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Physique, Chimie et Biologie.\nUsage de l’anglais, Physique, Chimie et Biologie."
    ],
    [
      "Science Médicale de Laboratoire",
      "1) Passes ‘A’ Level / IJMB dans trois matières : Physique, Chimie et Biologie ou Zoologie.\n2) Certificat de Technicien Médical de Laboratoire.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Physique, Chimie et Biologie.\nUsage de l’anglais, Physique, Chimie et Biologie."
    ],
    [
      "Radiographie Médicale",
      "1) Passes ‘A’ Level / IJMB dans trois matières : Physique, Chimie et Biologie ou Zoologie.\n2) Certificat de Technicien en Radiographie / Imagerie.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Physique, Chimie et Biologie.\nUsage de l’anglais, Physique, Chimie et Biologie."
    ]
  ]
}
,
    {
  title: "FACULTÉ DE SCIENCE PHARMACEUTIQUE",
  data: [
    [
      "Science Pharmaceutique",
      "Passes ‘A’ Level / IJMB en Biologie, Chimie et Physique.\nCertificat de Technicien en Pharmacie Unifié avec au moins mention Assez Bien (Upper Credit).",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Biologie, Chimie et Physique.\nUsage de l’anglais, Biologie, Chimie et Physique."
    ],
    [
      "Pharmacologie",
      "Passes ‘A’ Level / IJMB en Biologie, Chimie et Physique.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Biologie, Chimie et Physique.\nUsage de l’anglais, Biologie, Chimie et Physique."
    ],
    [
      "Toxicologie",
      "Passes ‘A’ Level / IJMB en Biologie, Chimie et Physique.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Biologie, Chimie et Physique.\nUsage de l’anglais, Biologie, Chimie et Physique."
    ],
    [
      "Pharmacie Herbale",
      "Passes ‘A’ Level / IJMB en Biologie, Chimie et Physique.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Biologie, Chimie et Physique.\nUsage de l’anglais, Biologie, Chimie et Physique."
    ]
  ]
}
,
    {
  title: "FACULTÉ DE SCIENCE PHYSIQUE",
  data: [
    [
      "Chimie",
      "Deux passes ‘A’ Level / IJMB en Chimie et toute autre matière scientifique.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Physique, Chimie et toute autre matière scientifique.\nUsage de l’anglais, Chimie, Physique et toute autre matière scientifique."
    ],
    [
      "Géographie",
      "Deux passes ‘A’ Level / IJMB incluant Géographie et toute autre matière scientifique.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques et toute autre matière scientifique.\nUsage de l’anglais, Géographie, Biologie et toute autre matière scientifique."
    ],
    [
      "Physique",
      "Deux passes ‘A’ Level / IJMB incluant Physique et Mathématiques.\nNCE en Physique/Mathématiques ou Diplôme en Physique avec Upper Credit.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Physique et deux autres matières scientifiques.\nUsage de l’anglais, Physique, Mathématiques et Chimie ou Biologie."
    ],
    [
      "Géologie",
      "Deux passes ‘A’ Level / IJMB en Géologie et toute autre matière scientifique (Chimie, Physique, Mathématiques, Biologie, Botanique, Zoologie, Géographie).",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Biologie, Chimie et Physique.\nUsage de l’anglais, Physique, Chimie et Biologie."
    ],
    [
      "Mathématiques",
      "Deux passes ‘A’ Level / IJMB en Mathématiques et toute autre matière parmi Chimie, Physique, Biologie, Géographie ou Géologie.\nNCE en Mathématiques et toute autre matière scientifique ou Informatique.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Physique et deux autres matières scientifiques (Chimie, Physique, Biologie, Géographie, Informatique).\nUsage de l’anglais, Mathématiques et toute autre matière scientifique."
    ],
    [
      "Informatique",
      "Passes ‘A’ Level / IJMB en Anglais, Mathématiques et toute matière scientifique (Chimie, Physique, Biologie, Géographie, Géologie ou Informatique/Processing Data).\nNCE en Informatique et toute matière scientifique.\nND ou Diplôme en Informatique avec Upper Credit / Merit.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Physique et deux autres matières parmi Chimie, Biologie, Géographie et Informatique.\nUsage de l’anglais, Mathématiques et deux matières parmi Physique, Chimie, Biologie/Agriculture et Géographie."
    ],
    [
      "Statistique",
      "Deux passes ‘A’ Level / IJMB en Mathématiques et toute autre matière scientifique (Chimie, Physique, Biologie, Géographie ou Géologie).\nNCE / ND / Diplôme ABU en Mathématiques ou Statistique avec Upper Credit ou Merit.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Physique et deux autres matières scientifiques (Chimie, Biologie, Géographie et Informatique).\nUsage de l’anglais, Mathématiques et toute autre matière scientifique."
    ]
  ]
}
,
    {
  title: "FACULTÉ DE SCIENCE SOCIALE",
  data: [
    [
      "Science Politique",
      "Deux passes ‘A’ Level / IJMB incluant Government/Histoire et une autre matière parmi Économie, Sociologie ou Géographie.\nDiplôme ABU en Science Politique et Études Internationales avec au moins Merit.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Government/Histoire et deux autres matières en Sciences Sociales parmi Économie, Commerce, Éducation Civique et Géographie.\nUsage de l’anglais, Government/Histoire et deux autres matières parmi Économie, Géographie, Éducation Civique et Commerce."
    ],
    [
      "Études Internationales",
      "Deux passes ‘A’ Level / IJMB incluant Government/Histoire et une autre matière parmi Économie, Sociologie ou Géographie.\nDiplôme ABU en Science Politique et Études Internationales avec au moins Merit.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Government/Histoire, Économie et de préférence Français ou Arabe.\nUsage de l’anglais, Government/Histoire, Économie et une autre matière, de préférence Français ou Arabe."
    ],
    [
      "Sociologie",
      "Deux passes ‘A’ Level / IJMB en Sociologie et une autre matière parmi Government/Histoire, Économie, Géographie.\nDiplôme ABU en Travail Social et Développement avec au moins Merit.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Government/Histoire, Économie, Géographie, CRK/IRK, Commerce et Éducation Civique.\nUsage de l’anglais, Government/Histoire et deux autres matières parmi Économie, Géographie, CRK/IRK, Commerce et Éducation Civique."
    ],
    [
      "Communication de Masse (Journalisme)",
      "Deux passes ‘A’ Level / IJMB incluant Government/Histoire et une autre matière parmi Économie, Sociologie ou toute langue nationale/internationale.\nDiplôme ABU / UNIJOS / UNIMAID en Journalisme / Communication de Masse avec au moins Merit.\nDiplôme NTA TV College en Production Télévisuelle avec au moins Merit.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Government/Histoire et deux autres matières des Arts ou Sciences Sociales.\nUsage de l’anglais, Government/Histoire et deux autres matières parmi Géographie, Économie, Littérature anglaise et toute autre langue."
    ]
  ]
}
,
    {
  title: "MÉDECINE VÉTÉRINAIRE",
  data: [
    [
      "Médecine Vétérinaire",
      "Trois passes ‘A’ Level / IJMB en Biologie/Zoologie, Chimie, Physique ou Mathématiques.\nHND en Santé et Élevage Animal ou Production Animale avec au moins Lower Credit d’un établissement accrédité.",
      "Cinq (5) crédits au niveau O incluant Langue anglaise, Mathématiques, Biologie, Chimie et Physique.\nUsage de l’anglais, Biologie, Chimie et Physique."
    ]
  ]
}
,
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        ECOLE DE BUSINESS ET PROGRAMMES DE LICENCE (UNDERGRADUATE)
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
                <th className="p-2 border">Relever Brevet</th>
                <th className="p-2 border">Relever Baccalauréat</th>
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

export default TableUG;

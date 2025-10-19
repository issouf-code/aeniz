import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-50 via-white to-green-50 p-6 flex flex-col items-center">
      {/* Header */}
      <section className="text-center max-w-3xl mb-10">
        <h1 className="text-3xl font-bold text-orange-600 mb-2">
          Contactez l’Association des Étudiants Nigériens à Zaria (AENIZ)
        </h1>
        <p className="text-gray-700">
          Nous serons ravis de répondre à vos questions ou de vous assister dans
          vos démarches à Zaria. N’hésitez pas à nous écrire ou à venir à notre
          siège.
        </p>
      </section>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Contact Information */}
        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-orange-500">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Informations de contact
          </h2>
          <p className="text-gray-700 mb-3">
            <strong>Adresse :</strong> Samaru, Ahmadu Bello University, Zaria,
            Kaduna State, Nigeria.
          </p>
          <p className="text-gray-700 mb-3">
            <strong>Téléphone :</strong>{" "}
            <a
              href="tel:+2348102345678"
              className="text-green-700 hover:underline"
            >
              +234 810 234 5678
            </a>
          </p>
          <p className="text-gray-700 mb-3">
            <strong>Email :</strong>{" "}
            <a
              href="mailto:AENIZ@gmail.com"
              className="text-orange-600 hover:underline"
            >
              AENIZ@gmail.com
            </a>
          </p>

          <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
            Réseaux sociaux
          </h3>
          <ul className="text-gray-700 space-y-2">
            <li>
              🌍 <strong>Facebook: </strong>
              <a
                href="https://web.facebook.com/profile.php?id=61582105559035"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:underline"
              >
                Association des étudiants nigérien à Zaria - AENIZ, ABU Zaria
              </a>
            </li>

            <li>
              💬 <strong>WhatsApp: </strong>
              <a
                href="https://wa.me/2348102345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                Chat via WhatsApp
              </a>
            </li>
          </ul>

          <p className="mt-6 text-gray-600 italic">
            Notre bureau est ouvert du lundi au samedi, de 8h à 18h.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-green-600">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">
            Envoyez-nous un message
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                placeholder="Entrez votre nom"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Adresse Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="exemple@gmail.com"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Écrivez votre message ici..."
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-green-600 text-white py-2 rounded-md hover:opacity-90 transition"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

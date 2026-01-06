import React from "react";

const Contact = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 sm:px-12">
      {/* ================= HEADER ================= */}
      <header className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="mb-3 text-3xl font-bold text-orange-600">
          Contactez l’Association des Étudiants Nigériens à Zaria (AENIZ)
        </h1>
        <p className="text-gray-700">
          Nous sommes disponibles pour répondre à vos questions et vous assister
          dans vos démarches académiques et sociales à Zaria.
        </p>
      </header>

      {/* ================= CONTENT ================= */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
        {/* ================= CONTACT INFO ================= */}
        <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 border-l-4 border-orange-500 pl-3 text-2xl font-semibold text-green-700">
            Informations de contact
          </h2>

          <address className="not-italic space-y-3 text-gray-700">
            <p>
              <span className="font-semibold">Adresse :</span> Samaru, Ahmadu
              Bello University, Zaria, Kaduna State, Nigeria.
            </p>

            <p>
              <span className="font-semibold">Téléphone :</span>{" "}
              <a
                href="tel:+2348102345678"
                className="text-green-700 hover:underline focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                +234 810 234 5678
              </a>
            </p>

            <p>
              <span className="font-semibold">Email :</span>{" "}
              <a
                href="mailto:AENIZ@gmail.com"
                className="text-orange-600 hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                AENIZ@gmail.com
              </a>
            </p>
          </address>

          <h3 className="mt-6 mb-2 text-xl font-semibold text-orange-600">
            Réseaux sociaux
          </h3>

          <ul className="space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Facebook :</span>{" "}
              <a
                href="https://web.facebook.com/profile.php?id=61582105559035"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:underline focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                Association des étudiants nigériens à Zaria (AENIZ)
              </a>
            </li>

            <li>
              <span className="font-semibold">WhatsApp :</span>{" "}
              <a
                href="https://wa.me/2348102345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Discuter via WhatsApp
              </a>
            </li>
          </ul>

          <p className="mt-6 italic text-gray-600">
            Bureau ouvert du lundi au samedi, de 8h à 18h.
          </p>
        </article>

        {/* ================= CONTACT FORM ================= */}
        <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 border-l-4 border-green-600 pl-3 text-2xl font-semibold text-orange-600">
            Envoyez-nous un message
          </h2>

          <form className="space-y-4" noValidate>
            <div>
              <label
                htmlFor="name"
                className="mb-1 block font-medium text-gray-700"
              >
                Nom complet
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block font-medium text-gray-700"
              >
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="exemple@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Écrivez votre message..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-green-700 py-2 font-medium text-white transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              Envoyer le message
            </button>
          </form>
        </article>
      </section>
    </main>
  );
};

export default Contact;

"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Ici, vous ajouterez la logique pour envoyer le formulaire
      // Par exemple, un appel API vers votre backend
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulation d'un appel API
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-poppins text-4xl font-bold text-center mb-12">
          Contact
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#0077b6] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#005f92] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading"
                ? "Envoi en cours..."
                : "Envoyer le message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-center">
                Votre message a été envoyé avec succès !
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600 text-center">
                Une erreur est survenue. Veuillez réessayer.
              </p>
            )}
          </form>
        </div>

        {/* Informations de contact alternatives */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="font-poppins text-xl font-semibold mb-4">Email</h2>
            <p className="text-gray-700">
              <a
                href="mailto:sambah450@gmail.com"
                className="hover:text-[#0077b6]"
              >
                sambah450@gmail.com
              </a>
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="font-poppins text-xl font-semibold mb-4">
              Réseaux sociaux
            </h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com/sbg224"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#0077b6]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-bah-aa38a1232/?utm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#0077b6]"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/sam_bah11?igsh=bmw1dm45bDZmYW4y&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#0077b6]"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

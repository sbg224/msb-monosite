"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import profil from "../assets/images/profile3.png";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
              Développeur Web Full Stack
            </h1>
            <p className="font-merriweather text-lg mb-8 text-gray-700">
              “Développeur full-stack en reconversion, je combine une solide
              expertise en React, Node.js et MySQL avec une approche pragmatique
              de la résolution de problèmes. Mon objectif : créer des solutions
              technologiques qui ont un impact réel.”
            </p>
            <div className="flex gap-4">
              <Link
                href="/portfolio"
                className="bg-[#0077b6] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#005f92] transition-colors"
              >
                Voir mon portfolio
              </Link>
              <Link
                href="/blog"
                className="bg-white text-[#0077b6] px-6 py-3 rounded-lg shadow-md hover:bg-gray-50 transition-colors border border-[#0077b6]"
              >
                Lire mon blog
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2" data-aos="zoom-in">
            <div
              className="relative w-64 h-64 mx-auto rounded-full overflow-hidden bg-gray-200"
              style={{
                boxShadow:
                  "0 10px 20px rgba(0, 119, 182, 0.3), 0 6px 6px rgba(0, 119, 182, 0.2)",
              }}
            >
              <Image
                src={profil}
                alt="image de profil"
                width={256}
                height={256}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compétences Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2
            className="font-poppins text-3xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Mes Compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="p-6 rounded-lg shadow-md bg-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="font-poppins text-xl font-semibold mb-4">
                Frontend
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="font-poppins text-xl font-semibold mb-4">
                Backend
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-white"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="font-poppins text-xl font-semibold mb-4">
                Outils
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projets Récents Section */}
<section className="container mx-auto px-4 py-16">
  <h2 className="font-poppins text-3xl font-bold text-center mb-12" data-aos="fade-up">
    Projets Récents
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Projet FrigoCheck */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="flip-up" data-aos-delay="100">
      <div className="p-6">
        <h3 className="font-poppins text-xl font-semibold mb-2">
          FrigoCheck
        </h3>
        <p className="text-gray-700 mb-4">
          Application de gestion de frigo pour réduire le gaspillage alimentaire.
        </p>
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            React
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            Node.js
          </span>
        </div>
        <Link
          href="/portfolio/frigocheck"
          className="text-[#0077b6] hover:underline"
        >
          En savoir plus →
        </Link>
      </div>
    </div>

    {/* Projet Shuko Manga */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="flip-up" data-aos-delay="200">
      <div className="p-6">
        <h3 className="font-poppins text-xl font-semibold mb-2">
          Shuko Manga
        </h3>
        <p className="text-gray-700 mb-4">
          Plateforme de lecture de manga en ligne.
        </p>
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            Next.js
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
            TypeScript
          </span>
        </div>
        <Link
          href="/portfolio/shuko-manga"
          className="text-[#0077b6] hover:underline"
        >
          En savoir plus →
        </Link>
      </div>
    </div>

    {/* Projet Portfolio */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="flip-up" data-aos-delay="300">
      <div className="p-6">
        <h3 className="font-poppins text-xl font-semibold mb-2">
          Portfolio
        </h3>
        <p className="text-gray-700 mb-4">
          Mon portfolio personnel avec un blog intégré.
        </p>
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            Next.js
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            Tailwind CSS
          </span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
            Markdown
          </span>
        </div>
        <Link
          href="/portfolio"
          className="text-[#0077b6] hover:underline"
        >
          En savoir plus →
        </Link>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}

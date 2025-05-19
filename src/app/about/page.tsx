import Image from "next/image";
import profil from "../../assets/images/profile3.png"

export default function About() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-poppins text-4xl font-bold text-center mb-12">
          À Propos
        </h1>

        {/* Section Présentation */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full flex justify-center md:w-1/3">
              <div className="relative w-64 h-64 rounded-full overflow-hidden bg-gray-200 shadow-lg" style={{ boxShadow: "0 10px 20px rgba(0, 119, 182, 0.3), 0 6px 6px rgba(0, 119, 182, 0.2)" }}>
                <Image src={profil} alt="image de profil" width={256} height={256} />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="font-poppins text-2xl font-semibold mb-4">
                Développeur Web Full Stack
              </h2>
              <p className="text-gray-700 mb-4">
                Passionné par le développement web et les nouvelles
                technologies, je crée des applications web modernes et
                performantes. Mon objectif est de concevoir des solutions
                élégantes qui répondent aux besoins des utilisateurs tout en
                respectant les meilleures pratiques de développement.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/sbg224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0077b6] hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-bah-aa38a1232/?utm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0077b6] hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section Parcours */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="font-poppins text-2xl font-semibold mb-6">
            Parcours Professionnel
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-poppins text-xl font-semibold mb-2">
                Développeur Full Stack
              </h3>
              <p className="text-gray-600 mb-2">2024 - Présent</p>
              <p className="text-gray-700">
                Développement d'applications web modernes avec React, Next.js et
                Node.js. Mise en place de solutions backend robustes et
                scalables.
              </p>
            </div>
            <div>
              <h3 className="font-poppins text-xl font-semibold mb-2">
                Développeur Frontend
              </h3>
              <p className="text-gray-600 mb-2">2024 - 2025</p>
              <p className="text-gray-700">
                Création d'interfaces utilisateur réactives et accessibles.
                Optimisation des performances et de l'expérience utilisateur.
              </p>
            </div>
          </div>
        </section>

        {/* Section Compétences */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="font-poppins text-2xl font-semibold mb-6">
            Compétences Techniques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-poppins text-xl font-semibold mb-4">
                Frontend
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>React / Next.js</li>
                <li>React-Native</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML5 / CSS3</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-poppins text-xl font-semibold mb-4">
                Backend
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Mysql</li>
                <li>RESTful APIs</li>
                <li>Authentication</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section Objectifs */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="font-poppins text-2xl font-semibold mb-6">
            Objectifs Professionnels
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Mon objectif principal est de continuer à développer mes
              compétences en développement web tout en contribuant à des projets
              innovants. Je souhaite notamment :
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Maîtriser de nouvelles technologies et frameworks</li>
              <li>Contribuer à des projets open source</li>
              <li>Partager mes connaissances à travers des articles de blog</li>
              <li>Développer des applications qui ont un impact positif</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

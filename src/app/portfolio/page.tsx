// import Link from "next/link";
import Image from "next/image";

// Import des données des projets depuis le fichier JSON
import projects from "../../database/projetData.json";

// Types pour les projets
interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	githubUrl: string;
	liveUrl?: string;
}

// Utilisation des données dynamiques
export default function Portfolio() {
	return (
		<main className="container mx-auto px-4 py-16">
			<h1 className="font-poppins text-4xl font-bold text-center mb-12">
				Mes Projets
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project: Project) => (
					<div
						key={project.id}
						className="bg-white rounded-lg shadow-md overflow-hidden"
					>
						<div className="relative h-48 overflow-hidden rounded-t-lg">
							<Image
								src={project.image}
								alt={project.title}
								layout="fill"
								objectFit="cover"
								className="rounded-t-lg"
							/>
						</div>
						<div className="p-6">
							<h2 className="font-poppins text-xl font-semibold mb-2">
								{project.title}
							</h2>
							<p className="text-gray-700 mb-4">{project.description}</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{project.technologies.map((tech) => (
									<span
										key={tech}
										className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
									>
										{tech}
									</span>
								))}
							</div>
							<div className="flex gap-4">
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#0077b6] hover:underline"
								>
									GitHub →
								</a>
								{/* {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0077b6] hover:underline"
                  >
                    Site web →
                  </a>
                )} */}
							</div>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}

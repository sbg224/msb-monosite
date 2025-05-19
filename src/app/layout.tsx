import type { Metadata } from "next";
import { Inter, Poppins, Merriweather } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-poppins",
});
const merriweather = Merriweather({
	weight: ["300", "400", "700"],
	subsets: ["latin"],
	variable: "--font-merriweather",
});

export const metadata: Metadata = {
	title: "Portfolio & Blog",
	description:
		"Portfolio et blog personnel présentant mes projets et veilles technologiques",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr">
			<Head>
				<link
					rel="alternate"
					type="application/rss+xml"
					title="Mon Blog"
					href="/api/rss"
				/>
				<meta
					name="description"
					content="Portfolio et blog personnel présentant mes projets et veilles technologiques"
				/>
				<meta property="og:title" content="Portfolio & Blog" />
				<meta
					property="og:description"
					content="Mes projets et veilles technologiques."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
			</Head>
			<body
				className={`${inter.variable} ${poppins.variable} ${merriweather.variable} font-sans bg-vintage-paper bg-paper-texture min-h-screen`}
			>
				<Navigation />
				<div className="pt-16">{children}</div>
				<footer className="bg-white mt-16 py-8 border-t border-vintage-brown/10">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div>
								<h3 className="font-poppins text-lg font-semibold mb-4 text-vintage-brown">
									Contact
								</h3>
								<p className="text-gray-700">
									Email:{" "}
									<a
										href="mailto:sambah450@gmail.com"
										className="hover:text-vintage-terracotta transition-colors"
									>
										sambah450@gmail.com
									</a>
									<br />
									Téléphone:{" "}
									<a
										href="tel:+33751044407"
										className="hover:text-vintage-terracotta transition-colors"
									>
										+33 7 51 04 44 07
									</a>
								</p>
							</div>
							<div>
								<h3 className="font-poppins text-lg font-semibold mb-4 text-vintage-brown">
									Liens Rapides
								</h3>
								<ul className="space-y-2">
									<li>
										<a
											href="/portfolio"
											className="text-gray-700 hover:text-vintage-terracotta transition-colors"
										>
											Portfolio
										</a>
									</li>
									<li>
										<a
											href="/blog"
											className="text-gray-700 hover:text-vintage-terracotta transition-colors"
										>
											Blog
										</a>
									</li>
									<li>
										<a
											href="/about"
											className="text-gray-700 hover:text-vintage-terracotta transition-colors"
										>
											À propos
										</a>
									</li>
									<li>
										<a
											href="/contact"
											className="text-gray-700 hover:text-vintage-terracotta transition-colors"
										>
											Contact
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h3 className="font-poppins text-lg font-semibold mb-4 text-vintage-brown">
									Réseaux Sociaux
								</h3>
								<div className="flex space-x-4">
									<a
										href="https://github.com/sbg224"
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-700 hover:text-vintage-terracotta transition-colors"
									>
										GitHub
									</a>
									<a
										href="https://www.linkedin.com/in/mohamed-bah-aa38a1232/?utm"
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-700 hover:text-vintage-terracotta transition-colors"
									>
										LinkedIn
									</a>
									<a
										href="https://www.instagram.com/sam_bah11?igsh=bmw1dm45bDZmYW4y&utm_source=qr"
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-700 hover:text-vintage-terracotta transition-colors"
									>
										Instagram
									</a>
								</div>
								<div>
									<h4 className=" font-poppins font-bold text-lg text-vintage-brown mt-2 mb-1 ">
										Abonnement
									</h4>
									<a
										className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-300 transition"
										href="/api/rss"
										target="_blank"
										rel="noopener noreferrer"
									>
										Abonnez-vous à mon flux RSS
									</a>
								</div>
							</div>
						</div>
						<div className="mt-8 pt-8 border-t border-vintage-brown/10 text-center text-gray-600">
							<p>
								&copy; {new Date().getFullYear()} Portfolio & Blog. Tous droits
								réservés.
							</p>
							<p className="mt-2">
								<a
									href="/mentions-legales"
									className="hover:text-vintage-terracotta transition-colors"
								>
									Mentions légales
								</a>
							</p>
						</div>
					</div>
				</footer>
			</body>
		</html>
	);
}

export default function MentionsLegales() {
	return (
		<main className="container mx-auto px-4 py-16">
			<div className="max-w-4xl mx-auto">
				<h1 className="font-poppins text-4xl font-bold text-center mb-12">
					Mentions Légales
				</h1>

				<div className="bg-white rounded-lg shadow-md p-8 space-y-8">
					{/* Éditeur du site */}
					<section>
						<h2 className="font-poppins text-2xl font-semibold mb-4">
							1. Éditeur du site
						</h2>
						<div className="text-gray-700 space-y-2">
							<p>Ce site est édité par :</p>
							<p>
								BAH Mohamed
								<br />1 Rue virginia Woolf, Toulouse
								<br />
								+33751044407
								<br />
								Email : sambah450@gmail.com
							</p>
						</div>
					</section>

					{/* Hébergement */}
					<section>
						<h2 className="font-poppins text-2xl font-semibold mb-4">
							2. Hébergement
						</h2>
						<div className="text-gray-700 space-y-2">
							<p>Ce site est hébergé par :</p>
							<p>
								Vercel Inc.
								<br />
								340 S Lemon Ave #4133
								<br />
								Walnut, CA 91789
								<br />
								États-Unis
							</p>
						</div>
					</section>

					{/* Propriété intellectuelle */}
					<section>
						<h2 className="font-poppins text-2xl font-semibold mb-4">
							3. Propriété intellectuelle
						</h2>
						<div className="text-gray-700 space-y-2">
							<p>
								L'ensemble de ce site relève de la législation française et
								internationale sur le droit d'auteur et la propriété
								intellectuelle. Tous les droits de reproduction sont réservés, y
								compris pour les documents téléchargeables et les
								représentations iconographiques et photographiques.
							</p>
							<p>
								La reproduction de tout ou partie de ce site sur un support
								électronique quel qu'il soit est formellement interdite sauf
								autorisation expresse du directeur de la publication.
							</p>
						</div>
					</section>

					{/* Protection des données personnelles */}
					<section>
						<h2 className="font-poppins text-2xl font-semibold mb-4">
							4. Protection des données personnelles
						</h2>
						<div className="text-gray-700 space-y-2">
							<p>
								Conformément à la loi "Informatique et Libertés" du 6 janvier
								1978 modifiée et au Règlement Général sur la Protection des
								Données (RGPD), vous disposez d'un droit d'accès, de
								rectification et de suppression des données vous concernant.
							</p>
							<p>
								Pour exercer ce droit, vous pouvez nous contacter à l'adresse
								suivante : sambah450@gmail.com
							</p>
						</div>
					</section>

					{/* Cookies */}
					<section>
						<h2 className="font-poppins text-2xl font-semibold mb-4">
							5. Cookies
						</h2>
						<div className="text-gray-700 space-y-2">
							<p>
								Ce site utilise des cookies pour améliorer l'expérience de
								navigation. Vous pouvez à tout moment désactiver l'utilisation
								de cookies en sélectionnant les paramètres appropriés de votre
								navigateur.
							</p>
						</div>
					</section>

					{/* Contact */}
					<section>
						<h2 className="font-poppins text-2xl font-semibold mb-4">
							6. Contact
						</h2>
						<div className="text-gray-700 space-y-2">
							<p>
								Pour toute question concernant ces mentions légales, vous pouvez
								nous contacter à l'adresse suivante : sambah450@gmail.com
							</p>
						</div>
					</section>

					{/* Dernière mise à jour */}
					<section>
						<h2 className="font-poppins text-2xl font-semibold mb-4">
							7. Dernière mise à jour
						</h2>
						<div className="text-gray-700">
							<p>
								Dernière mise à jour des mentions légales :{" "}
								{new Date().toLocaleDateString("fr-FR")}
							</p>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}

import React from 'react'

export default function JoinSection() {
	return (
		<>
			<section
				className="relative bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: "url('/images/join/security.jpg')" }}
			>
				<div className="container mx-auto max-w-7xl px-4 py-24">
					<div className="max-w-3xl text-left">
						<h2 className="font-bold tracking-tight mb-4 text-white whitespace-nowrap text-2xl sm:text-3xl lg:text-4xl leading-tight">
							Envie de rejoindre nos formations ?
						</h2>
						<p className="text-lg font-medium mb-6 leading-relaxed text-white">
							Rejoignez nos formations en sécurité et donnez un nouvel élan à votre avenir ! Nos cursus allient théorie et pratique pour vous offrir une expertise solide dans la gestion et la protection des sites, événements et personnes. Avec des intervenants experts, des formations en alternance ou initiales, et des diplômes reconnus par l’État, vous développerez des compétences clés pour répondre aux exigences du secteur. Intégrez un domaine en pleine expansion et devenez un acteur incontournable de la sécurité privée ou publique. Construisez dès aujourd’hui votre carrière avec nous !
						</p>

						<div className="mt-6">
							<button
								aria-label="Demander votre brochure"
								className="group relative inline-flex items-center bg-white text-[#102C46] font-semibold py-3 pl-5 pr-14 rounded-md shadow-md overflow-visible whitespace-nowrap"
							>
								<span className="relative z-10">
									Demander votre brochure
								</span>

								<span className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 overflow-visible">
									<span className="absolute inset-0 flex items-center justify-center">
										<span className="arrow-box flex items-center justify-center w-10 h-10 bg-[#102C46] rounded-sm text-white transition-transform duration-300 transform group-hover:translate-x-14">
											<svg
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="inline-block"
											>
												<path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
												<path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
											</svg>
										</span>
									</span>
								</span>
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-[#102C46] py-24">
				<div className="container mx-auto max-w-8xl px-8">
					<div className='flex flex-col sm:flex-row gap-5 justify-between sm:items-center mb-12'>
						<h2 className='font-bold tracking-tight text-white'>Nos centres de formation</h2>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
						{[1, 2, 3, 4].map((_, index) => (
							<div
								key={index}
								className="bg-white shadow-md rounded-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
							>
								<h3 className="text-2xl font-bold text-[#102C46] mb-2">ID Protect</h3>
								<p className="text-lg font-medium text-[#C5A972] mb-1">Centre de formation</p>
								<p className="text-sm text-gray-700">18 rue de strasbourg</p>
								<p className="text-sm text-gray-700">67000 STRASBOURG</p>
								<p className="text-sm text-gray-700">06 01 02 03 04</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

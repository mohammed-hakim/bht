const offers = [
    {
      title: "Offre Statique",
      description:
        "Site vitrine moderne avec sections fixes (biens, contact, galerie...). Idéal pour agences avec un catalogue qui évolue peu.",
      features: [
        "Design personnalisé",
        "Adapté mobile/tablette",
        "Hébergement inclus",
        "Mises à jour sur demande"
      ],
      highlight: "Simple et efficace",
    },
    {
      title: "Offre Dynamique",
      description:
        "Site administrable avec tableau de bord pour ajouter/modifier vos biens à tout moment, sans besoin technique.",
      features: [
        "Espace d’administration",
        "Ajout/suppression de biens",
        "Recherche intelligente",
        "Formulaire de contact"
      ],
      highlight: "Autonomie & évolutivité",
    },
    {
      title: "Offre Sur-Mesure",
      description:
        "Plateforme entièrement personnalisée, intégrée à vos outils ou processus internes. Conçue pour digitaliser votre gestion.",
      features: [
        "Modules personnalisés",
        "Connexion CRM / Excel",
        "Back-office avancé",
        "Accès multi-utilisateurs"
      ],
      highlight: "Solution 100% adaptée",
    },
  ];
  
  export default function Offers() {
    return (
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Offres</h2>
          <p className="text-gray-600">Choisissez la solution la plus adaptée à votre activité</p>
        </div>
  
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-p1 mb-2">{offer.title}</h3>
              <p className="text-gray-600 mb-4">{offer.description}</p>
  
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                {offer.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> {f}
                  </li>
                ))}
              </ul>
  
              <div className="mt-auto text-sm font-medium text-p1">{offer.highlight}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
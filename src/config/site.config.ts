export interface SiteConfig {
  siteName: string;
  siteDomain: string;
  tagline: string;
  description: string;
  contactEmail: string;
  // Métadonnées SEO prioritaires (sans branding)
  primaryKeyword?: string;
  homeSeoTitle?: string;
  homeH1?: string;
  homeTagline?: string;
  homeDescription?: string;
  affiliate: {
    amazonTag: string;
    disclaimer: string;
  };
  theme: {
    primaryColor: "#1e3a8a",
    primaryHoverColor: "#172554",
    accentColor: "#f97316"
  };
}

export const siteConfig: SiteConfig = {
  siteName: "InverterExpert",
  siteDomain: "https://meilleur-poste-a-souder-inverter.fr",
  tagline: "Comparatifs techniques et guides indépendants pour choisir le poste à souder inverter idéal",
  description: "Trouvez le meilleur poste à souder inverter adapté à vos travaux. Comparatifs détaillés, tests de puissance et avis impartiaux pour un achat réussi.",
  contactEmail: "contact@meilleur-poste-a-souder-inverter.fr",
  // Optimisation mot-clé principal "Meilleur"
  primaryKeyword: "Meilleur poste à souder inverter",
  homeSeoTitle: "Meilleur Poste à Souder Inverter : Comparatif, Tests & Guide",
  homeH1: "Meilleur Poste à Souder Inverter",
  homeTagline: "Le comparatif indépendant et tests vérifiés des experts",
  homeDescription: "Quel est le meilleur poste à souder inverter ? Retrouvez notre comparatif indépendant, les tests de puissance réels, nos tests vérifiés et le guide d'achat complet pour faire le bon choix.",
  affiliate: {
    amazonTag: "amazonwp0b-21",
    disclaimer: "En tant que Partenaire Amazon, ce site réalise un bénéfice sur les achats remplissant les conditions requises."
  },
  theme: {
    primaryColor: "#1e3a8a",
    primaryHoverColor: "#172554",
    accentColor: "#f97316"
  }
};

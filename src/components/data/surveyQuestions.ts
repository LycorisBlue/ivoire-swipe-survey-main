export interface Question {
  id: string;
  question: string;
  component:
    | "text"
    | "number"
    | "checkbox"
    | "multiple"
    | "dropdown"
    | "slider"
    | "date"
    | "satisfaction"
    | "radio"
    | "textarea";
  placeholder?: string;
  required: boolean;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
  label?: string;
}

export const surveyQuestions: Question[] = [
  {
    id: "age_range",
    question: "Dans quelle tranche d’âge vous situez-vous ?",
    component: "radio",
    options: [
      "12-17 ans (adolescent)",
      "18-24 ans (jeune adulte)",
      "25-34 ans",
      "35-44 ans",
      "45-54 ans",
      "55 ans et plus",
    ],
    required: true,
  },
  {
    id: "location",
    question: "Dans quel quartier ou commune d’Abidjan résidez-vous ?",
    component: "dropdown",
    placeholder: "Sélectionnez votre quartier",
    options: [
      "Cocody",
      "Marcory",
      "Yopougon",
      "Plateau",
      "Adjamé",
      "Treichville",
      "Abobo",
      "Riviera",
      "Autre",
    ],
    required: true,
  },
  {
    id: "market_frequency",
    question: "À quelle fréquence faites-vous vos courses au marché ?",
    component: "radio",
    options: [
      "Tous les jours",
      "2-3 fois par semaine",
      "Une fois par semaine",
      "Moins d’une fois par semaine",
    ],
    required: true,
  },
  {
    id: "market_budget",
    question: "Quel est votre budget moyen par visite au marché (en FCFA) ?",
    component: "slider",
    min: 1000,
    max: 30000,
    step: 500,
    label: "FCFA",
    required: true,
  },
  {
    id: "product_types",
    question:
      "Quels produits achetez-vous le plus souvent au marché ? (Plusieurs réponses possibles)",
    component: "multiple",
    options: [
      "Légumes frais",
      "Fruits frais",
      "Viandes",
      "Poissons frais",
      "Épices et condiments",
      "Féculents (igname, manioc, riz)",
    ],
    required: true,
  },
  {
    id: "market_challenges",
    question:
      "Quels sont les principaux défis lorsque vous faites vos courses au marché ? (Plusieurs réponses possibles)",
    component: "multiple",
    options: [
      "Embouteillages/déplacements",
      "Manque de temps",
      "Qualité variable des produits",
      "Prix élevés",
      "Difficulté à trouver certains produits",
      "Autres",
    ],
    required: true,
  },
  {
    id: "delivery_interest",
    question:
      "Seriez-vous intéressé(e) par un service de livraison de produits frais à domicile ou à un point relais ?",
    component: "radio",
    options: [
      "Oui, très intéressé(e)",
      "Oui, peut-être",
      "Non, pas intéressé(e)",
    ],
    required: true,
  },
  {
    id: "delivery_budget",
    question:
      "Combien seriez-vous prêt(e) à payer pour une livraison de produits frais (en FCFA) ?",
    component: "slider",
    min: 500,
    max: 5000,
    step: 100,
    label: "FCFA",
    required: false,
  },
  {
    id: "preferred_features",
    question:
      "Quelles fonctionnalités d’une application de livraison de produits frais et de contenu culinaire vous intéressent le plus ? (Sélectionnez jusqu’à 3 options)",
    component: "multiple",
    options: [
      "Livraison de produits frais à domicile ou en point relais",
      "Commandes récurrentes programmées (hebdomadaires/mensuelles)",
      "Recettes ivoiriennes gratuites avec liste d’ingrédients",
      "Vidéos premium de préparation de plats traditionnels",
      "Achat direct des ingrédients depuis une recette",
      "Communauté pour partager astuces et recettes",
    ],
    required: true,
  },
  {
    id: "sharing_habits",
    question:
      "Aimez-vous partager des recettes, astuces culinaires ou conseils avec d’autres personnes ?",
    component: "radio",
    options: [
      "Oui, souvent (sur réseaux sociaux, WhatsApp, etc.)",
      "Oui, parfois",
      "Non, rarement ou jamais",
    ],
    required: true,
  },
  {
    id: "mobile_money",
    question:
      "Utilisez-vous des services de paiement mobile comme Orange Money ou MTN Mobile Money pour vos achats ?",
    component: "radio",
    options: ["Oui, souvent", "Oui, parfois", "Non, jamais"],
    required: true,
  },
  {
    id: "smartphone_usage",
    question:
      "À quelle fréquence utilisez-vous votre smartphone pour des achats ou services en ligne ?",
    component: "radio",
    options: [
      "Tous les jours",
      "Quelques fois par semaine",
      "Rarement",
      "Jamais",
    ],
    required: true,
  },
  {
    id: "freshness_concern",
    question:
      "Quelle est votre principale préoccupation concernant l’achat de produits frais en ligne ?",
    component: "textarea",
    placeholder: "Partagez vos préoccupations...",
    required: false,
  },
  {
    id: "satisfaction_current",
    question:
      "Comment évaluez-vous votre satisfaction générale avec vos courses actuelles au marché ?",
    component: "satisfaction",
    required: true,
  },
  {
    id: "suggestions",
    question:
      "Quelles fonctionnalités souhaiteriez-vous dans une application de livraison de produits frais et de contenu culinaire ?",
    component: "textarea",
    placeholder: "Partagez vos idées et suggestions...",
    required: false,
  },
];

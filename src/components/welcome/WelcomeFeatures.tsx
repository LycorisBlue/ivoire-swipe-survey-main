import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
    Target,
    BarChart3,
    Handshake,
    Lightbulb,
    TrendingUp,
    MapPin,
    ShoppingBasket,
    Users2
} from 'lucide-react';

const WelcomeFeatures: React.FC = () => {
    const features = [
        {
            icon: Target,
            title: "Objectif de l'étude",
            description: "Comprendre les habitudes d'achat des Ivoiriens pour améliorer l'offre et l'organisation des marchés locaux.",
            color: "text-green-600 bg-green-100"
        },
        {
            icon: BarChart3,
            title: "Données importantes",
            description: "Vos réponses nous aideront à identifier les tendances et besoins prioritaires des consommateurs.",
            color: "text-blue-600 bg-blue-100"
        },
        {
            icon: TrendingUp,
            title: "Impact économique",
            description: "Contribuez à l'amélioration de l'économie locale en partageant votre expérience d'achat.",
            color: "text-orange-600 bg-orange-100"
        },
        {
            icon: Handshake,
            title: "Partenariat communautaire",
            description: "Une collaboration entre consommateurs, vendeurs et autorités pour des marchés plus efficaces.",
            color: "text-purple-600 bg-purple-100"
        }
    ];

    const whatWeStudy = [
        {
            icon: ShoppingBasket,
            title: "Types de produits",
            subtitle: "Quels produits achetez-vous le plus souvent ?"
        },
        {
            icon: MapPin,
            title: "Localisation",
            subtitle: "Dans quels marchés faites-vous vos courses ?"
        },
        {
            icon: TrendingUp,
            title: "Budget et fréquence",
            subtitle: "Combien dépensez-vous et à quelle fréquence ?"
        },
        {
            icon: Users2,
            title: "Satisfaction",
            subtitle: "Comment évaluez-vous votre expérience ?"
        }
    ];

    return (
        <div className="py-24 px-6 relative overflow-hidden">

            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-green-200/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-200/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        Pourquoi ce sondage ?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Votre participation contribue directement à l'amélioration des marchés ivoiriens
                        et de l'expérience d'achat pour toute la communauté.
                    </p>
                </div>

                {/* Features Grid - Style cohérent avec Survey.tsx */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-green-200/50 bg-white/90 backdrop-blur-sm">
                            <CardContent className="p-8">
                                <div className="flex items-start space-x-4">
                                    <div className={`p-3 rounded-full ${feature.color}`}>
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* What We Study Section */}
                <div className="bg-gradient-to-r from-green-50/80 via-white/90 to-green-100/60 rounded-2xl p-10">
                    <div className="text-center mb-12">
                        <Lightbulb className="w-12 h-12 text-green-600 mx-auto mb-6" />
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            Ce que nous étudions
                        </h3>
                        <p className="text-gray-600">
                            Découvrez les aspects de vos habitudes d'achat qui nous intéressent
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whatWeStudy.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 transition-colors duration-300 hover:bg-white/80">
                                    <div className="inline-flex p-3 bg-green-100 rounded-full mb-4">
                                        <item.icon className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Data Usage Section */}
                <div className="mt-20 text-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-green-200/50">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                            🔒 Comment vos données seront utilisées
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                            <div className="space-y-3">
                                <div className="text-2xl">📊</div>
                                <h4 className="font-semibold text-gray-800">Analyse statistique</h4>
                                <p className="text-sm text-gray-600">
                                    Création de rapports anonymisés sur les tendances d'achat
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="text-2xl">🏛️</div>
                                <h4 className="font-semibold text-gray-800">Recommandations</h4>
                                <p className="text-sm text-gray-600">
                                    Propositions d'améliorations aux autorités compétentes
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="text-2xl">🤝</div>
                                <h4 className="font-semibold text-gray-800">Partage public</h4>
                                <p className="text-sm text-gray-600">
                                    Résultats partagés avec la communauté (données agrégées)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeFeatures;
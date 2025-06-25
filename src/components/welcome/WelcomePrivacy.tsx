import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
    Shield,
    Lock,
    Eye,
    Database,
    UserCheck,
    FileText,
    CheckCircle,
    AlertCircle
} from 'lucide-react';

const WelcomePrivacy: React.FC = () => {
    const privacyPoints = [
        {
            icon: Lock,
            title: "Données cryptées",
            description: "Toutes vos réponses sont cryptées et stockées de manière sécurisée."
        },
        {
            icon: Eye,
            title: "Anonymat garanti",
            description: "Aucune donnée personnelle identifiable n'est collectée ou stockée."
        },
        {
            icon: Database,
            title: "Usage limité",
            description: "Les données ne seront utilisées que pour cette étude spécifique."
        },
        {
            icon: UserCheck,
            title: "Consentement libre",
            description: "Vous pouvez arrêter le sondage à tout moment sans conséquence."
        }
    ];

    const dataTypes = [
        {
            type: "✅ Collecté",
            items: [
                "Vos habitudes d'achat (produits, fréquence)",
                "Votre ville de résidence (ville seulement)",
                "Votre satisfaction générale",
                "Vos suggestions d'amélioration"
            ],
            color: "text-green-600 bg-green-50 border-green-200"
        },
        {
            type: "❌ PAS collecté",
            items: [
                "Votre nom ou prénom",
                "Votre adresse exacte",
                "Votre numéro de téléphone",
                "Vos données bancaires ou revenus exacts"
            ],
            color: "text-red-600 bg-red-50 border-red-200"
        }
    ];

    return (
        <div className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">

                {/* Section Title */}
                <div className="text-center mb-12">
                    <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Confidentialité et sécurité
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Votre vie privée est notre priorité. Découvrez comment nous protégeons
                        vos données et respectons votre anonymat.
                    </p>
                </div>

                {/* Privacy Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {privacyPoints.map((point, index) => (
                        <Card key={index} className="border-green-200/50 hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-6 text-center">
                                <div className="inline-flex p-3 bg-green-100 rounded-full mb-4">
                                    <point.icon className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="font-semibold text-gray-800 mb-2">
                                    {point.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {point.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Data Collection Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {dataTypes.map((category, index) => (
                        <Card key={index} className={`border ${category.color.split(' ')[2]}`}>
                            <CardContent className="p-6">
                                <h3 className={`text-xl font-bold mb-4 ${category.color.split(' ')[0]}`}>
                                    {category.type}
                                </h3>
                                <ul className="space-y-3">
                                    {category.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start space-x-3">
                                            {category.type.includes('✅') ? (
                                                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            ) : (
                                                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                            )}
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Legal Information */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-4 mb-6">
                        <FileText className="w-8 h-8 text-gray-600 mt-1" />
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                Informations légales
                            </h3>
                            <p className="text-gray-600">
                                Cette étude respecte les réglementations en vigueur en Côte d'Ivoire
                                concernant la protection des données personnelles.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Vos droits :</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Droit d'arrêter le sondage à tout moment</li>
                                <li>• Droit de connaître l'usage de vos réponses</li>
                                <li>• Accès aux résultats globaux de l'étude</li>
                                <li>• Aucune obligation de participation</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Notre engagement :</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Suppression des données après analyse</li>
                                <li>• Aucune revente ou partage avec des tiers</li>
                                <li>• Publication des résultats de manière agrégée</li>
                                <li>• Transparence totale sur les objectifs</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center space-x-2 mb-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="font-semibold text-green-800">Engagement de transparence</span>
                        </div>
                        <p className="text-sm text-green-700">
                            Les résultats de cette étude seront publiés et accessibles au public.
                            Vous contribuez à une démarche transparente d'amélioration des services.
                        </p>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="mt-12 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Questions sur la confidentialité ?
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Si vous avez des questions concernant l'utilisation de vos données,
                        n'hésitez pas à nous contacter.
                    </p>
                    <div className="inline-flex items-center space-x-4 bg-gray-100 rounded-full px-6 py-3">
                        <span className="text-gray-600">📧 contact@marches-survey.ci</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePrivacy;
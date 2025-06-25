import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
    Users,
    MapPin,
    TrendingUp,
    Clock,
    CheckCircle,
    Star,
    BarChart3,
    Target
} from 'lucide-react';

const WelcomeStats: React.FC = () => {
    const [animatedStats, setAnimatedStats] = useState({
        participants: 0,
        cities: 0,
        satisfaction: 0,
        completion: 0
    });

    // Animation des statistiques au chargement
    useEffect(() => {
        const targetStats = {
            participants: 1247,
            cities: 15,
            satisfaction: 4.8,
            completion: 94
        };

        const duration = 2000; // 2 secondes
        const steps = 60;
        const interval = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setAnimatedStats({
                participants: Math.floor(targetStats.participants * progress),
                cities: Math.floor(targetStats.cities * progress),
                satisfaction: Math.min(targetStats.satisfaction * progress, targetStats.satisfaction),
                completion: Math.floor(targetStats.completion * progress)
            });

            if (currentStep >= steps) {
                clearInterval(timer);
                setAnimatedStats(targetStats);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    const stats = [
        {
            icon: Users,
            value: animatedStats.participants.toLocaleString(),
            label: "Participants déjà inscrits",
            suffix: "+",
            color: "text-green-600 bg-green-100",
            description: "Ivoiriens ont déjà participé"
        },
        {
            icon: MapPin,
            value: animatedStats.cities,
            label: "Villes couvertes",
            suffix: "",
            color: "text-blue-600 bg-blue-100",
            description: "À travers la Côte d'Ivoire"
        },
        {
            icon: Star,
            value: animatedStats.satisfaction.toFixed(1),
            label: "Satisfaction moyenne",
            suffix: "/5",
            color: "text-orange-600 bg-orange-100",
            description: "Note donnée au processus"
        },
        {
            icon: CheckCircle,
            value: animatedStats.completion,
            label: "Taux de completion",
            suffix: "%",
            color: "text-purple-600 bg-purple-100",
            description: "Des participants terminent"
        }
    ];

    const testimonials = [
        {
            name: "Aminata K.",
            city: "Abidjan",
            comment: "Simple et rapide ! J'espère que ça aidera à améliorer nos marchés.",
            rating: 5
        },
        {
            name: "Kofi M.",
            city: "Bouaké",
            comment: "Questions pertinentes sur nos habitudes d'achat quotidiennes.",
            rating: 5
        },
        {
            name: "Fatou D.",
            city: "Yamoussoukro",
            comment: "Interface intuitive, j'ai pu répondre facilement sur mon téléphone.",
            rating: 4
        }
    ];

    const marketBenefits = [
        {
            icon: TrendingUp,
            title: "Amélioration des services",
            description: "Meilleure organisation et offre adaptée aux besoins"
        },
        {
            icon: Clock,
            title: "Gain de temps",
            description: "Processus d'achat plus efficace pour tous"
        },
        {
            icon: BarChart3,
            title: "Données fiables",
            description: "Décisions basées sur de vraies données terrain"
        },
        {
            icon: Target,
            title: "Impact ciblé",
            description: "Actions concrètes dans votre région"
        }
    ];

    return (
        <div className="py-16 px-4 bg-gradient-to-b from-white to-green-50/30">
            <div className="max-w-6xl mx-auto">

                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Rejoignez une communauté engagée
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Des milliers d'Ivoiriens participent déjà à cette initiative pour améliorer
                        l'expérience d'achat dans nos marchés.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <Card key={index} className="border-green-200/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <CardContent className="p-6 text-center">
                                <div className={`inline-flex p-3 rounded-full ${stat.color} mb-4`}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div className="text-3xl font-bold text-gray-800 mb-1">
                                    {stat.value}{stat.suffix}
                                </div>
                                <div className="font-semibold text-gray-700 mb-2">
                                    {stat.label}
                                </div>
                                <div className="text-sm text-gray-500">
                                    {stat.description}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Testimonials Section */}
                <div className="mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
                        Ce que disent les participants
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="border-green-200/50">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-3">
                                        <div className="flex space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < testimonial.rating
                                                            ? 'text-yellow-400 fill-current'
                                                            : 'text-gray-300'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4 italic">
                                        "{testimonial.comment}"
                                    </p>
                                    <div className="text-sm">
                                        <div className="font-semibold text-gray-800">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-gray-500">
                                            {testimonial.city}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-green-200/50">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
                        Les bénéfices attendus
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {marketBenefits.map((benefit, index) => (
                            <div key={index} className="text-center group">
                                <div className="inline-flex p-3 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors">
                                    <benefit.icon className="w-6 h-6 text-green-600" />
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">
                                    {benefit.title}
                                </h4>
                                <p className="text-sm text-gray-600">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Section */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center space-x-4 bg-green-50 rounded-full px-6 py-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-green-800 font-medium">
                            Données 100% sécurisées et anonymes
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeStats;
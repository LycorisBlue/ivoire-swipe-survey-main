import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Shield, Users } from 'lucide-react';

interface WelcomeHeroProps {
    onStartSurvey: () => void;
    onLearnMore: () => void;
}

const WelcomeHero: React.FC<WelcomeHeroProps> = ({ onStartSurvey, onLearnMore }) => {
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-green-50/80 via-white/90 to-green-100/60 relative overflow-hidden">

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-200/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="w-full max-w-6xl mx-auto text-center relative z-10">

                {/* Hero Content */}
                <div className="mb-20">

                    {/* Emoji Icon */}
                    <div className="text-8xl mb-12 hover:scale-110 transition-transform duration-700 ease-out">
                        🏪
                    </div>

                    {/* Main Title */}
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-12 leading-tight tracking-tight">
                        Aidez-nous à améliorer
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500 block mt-4">
                            vos marchés préférés
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
                        Partagez vos habitudes d'achat au marché ivoirien et contribuez à
                        l'amélioration de l'expérience pour tous les consommateurs.
                    </p>

                    {/* Key Features - Style cohérent */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
                        <div className="flex items-center justify-center space-x-3 p-6 bg-white/60 rounded-lg shadow-sm hover:bg-white/70 transition-colors duration-300">
                            <Clock className="w-6 h-6 text-green-600" />
                            <span className="text-gray-700 font-medium text-lg">5 minutes seulement</span>
                        </div>

                        <div className="flex items-center justify-center space-x-3 p-6 bg-white/60 rounded-lg shadow-sm hover:bg-white/70 transition-colors duration-300">
                            <Shield className="w-6 h-6 text-green-600" />
                            <span className="text-gray-700 font-medium text-lg">100% anonyme</span>
                        </div>

                        <div className="flex items-center justify-center space-x-3 p-6 bg-white/60 rounded-lg shadow-sm hover:bg-white/70 transition-colors duration-300">
                            <Users className="w-6 h-6 text-green-600" />
                            <span className="text-gray-700 font-medium text-lg">Impact communautaire</span>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="space-y-8">
                    <Button
                        onClick={onStartSurvey}
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Commencer le sondage
                        <ArrowRight className="w-6 h-6 ml-3" />
                    </Button>

                    <div className="text-center">
                        <button
                            onClick={onLearnMore}
                            className="text-green-600 hover:text-green-700 text-xl font-medium transition-colors duration-300 hover:underline decoration-2 underline-offset-4"
                        >
                            En savoir plus sur cette initiative
                        </button>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-24 pt-12 border-t border-green-200/50">
                    <p className="text-gray-500 text-lg mb-8 font-light">
                        Cette initiative vise à améliorer l'expérience d'achat dans les marchés ivoiriens
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-gray-400">
                        <div className="flex items-center space-x-3">
                            <span className="text-xl">🔒</span>
                            <span className="text-sm font-medium">Données sécurisées</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-xl">🚀</span>
                            <span className="text-sm font-medium">Résultats partagés</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-xl">🌍</span>
                            <span className="text-sm font-medium">Impact local</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeHero;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeHero from '@/components/welcome/WelcomeHero';
import WelcomeFeatures from '@/components/welcome/WelcomeFeatures';
import WelcomeStats from '@/components/welcome/WelcomeStats';
import WelcomePrivacy from '@/components/welcome/WelcomePrivacy';
import { Button } from '@/components/ui/button';
import { ArrowUp, X } from 'lucide-react';

const Welcome: React.FC = () => {
    const navigate = useNavigate();
    const [showLearnMore, setShowLearnMore] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Gestion du scroll pour afficher le bouton "retour en haut"
    React.useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleStartSurvey = () => {
        // Animation de transition avant la navigation
        document.body.style.opacity = '0.9';
        setTimeout(() => {
            navigate('/survey');
        }, 200);
    };

    const handleLearnMore = () => {
        setShowLearnMore(true);
        // Scroll smooth vers la section Features
        document.getElementById('learn-more-section')?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCloseLearnMore = () => {
        setShowLearnMore(false);
        scrollToTop();
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section id="hero">
                <WelcomeHero
                    onStartSurvey={handleStartSurvey}
                    onLearnMore={handleLearnMore}
                />
            </section>

            {/* Learn More Sections - Affichées conditionnellement */}
            {showLearnMore && (
                <>
                    {/* Close Button */}
                    <div className="fixed top-4 right-4 z-50">
                        <Button
                            onClick={handleCloseLearnMore}
                            variant="outline"
                            size="icon"
                            className="bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white"
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </div>

                    {/* Features Section */}
                    <section id="learn-more-section" className="scroll-mt-20">
                        <WelcomeFeatures />
                    </section>

                    {/* Stats Section */}
                    <section id="stats">
                        <WelcomeStats />
                    </section>

                    {/* Privacy Section */}
                    <section id="privacy">
                        <WelcomePrivacy />
                    </section>

                    {/* Call to Action Final */}
                    <section className="py-16 px-4 bg-gradient-to-r from-green-500 to-green-600">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="text-white">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Prêt à participer ?
                                </h2>
                                <p className="text-xl mb-8 text-green-100">
                                    Votre voix compte pour améliorer les marchés ivoiriens
                                </p>

                                <div className="space-y-4">
                                    <Button
                                        onClick={handleStartSurvey}
                                        className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                    >
                                        Commencer le sondage maintenant
                                    </Button>

                                    <div className="text-green-100 text-sm">
                                        ⏱️ 5 minutes • 🔒 100% anonyme • 🌍 Impact garanti
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <div className="fixed bottom-6 right-6 z-40">
                    <Button
                        onClick={scrollToTop}
                        className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </Button>
                </div>
            )}

            {/* Floating Quick Start - Visible seulement si learn more est ouvert */}
            {showLearnMore && (
                <div className="fixed bottom-6 left-6 z-40">
                    <Button
                        onClick={handleStartSurvey}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
                    >
                        🚀 Démarrer
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Welcome;
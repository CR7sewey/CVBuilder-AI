import React from 'react';
import BrandsFooter from './BrandsFooter';

const LandingScreen = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                        Create Your Professional CV
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Build a stunning resume in minutes with our easy-to-use CV builder. Stand out to employers with a professionally designed CV.
                    </p>
                    <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
                        Start Building
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-muted/50 py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="text-3xl mb-4">🎨</div>
                            <h3 className="text-xl font-semibold mb-2">Beautiful Templates</h3>
                            <p className="text-muted-foreground">Choose from a variety of professional templates</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-3xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold mb-2">Quick & Easy</h3>
                            <p className="text-muted-foreground">Create your CV in minutes with our intuitive interface</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-3xl mb-4">📱</div>
                            <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
                            <p className="text-muted-foreground">Access and edit your CV from any device</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Ready to Create Your CV?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Join thousands of professionals who have created their CVs with us
                    </p>
                    <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-secondary/90 transition-colors">
                        Get Started Now
                    </button>
                </div>
            </div>

            {/* Brands Footer */}
            <BrandsFooter />
        </div>
    );
};

export default LandingScreen; 
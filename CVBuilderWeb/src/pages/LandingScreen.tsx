import React from 'react';

const LandingScreen = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                        Create Your Professional CV <br />with the power of AI
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        <strong>Tiered</strong> of thousands of CV templates? <br />
                        <strong>Tired</strong> of the same old CV format? <br />
                        <strong>Rejected</strong> by recruiters because of your CV? <br />
                        Want to <strong>stand out</strong> from the crowd? <br />
                        <strong><span className="text-3xl text-primary">We've got you covered.</span></strong>
                    </p>

                </div>
            </div>



            {/* CTA Section */}
            <div className="container mx-auto px-4 py-4">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                        Ready to Create Your CV?
                    </h2>
                    <div className="bg-muted/50 py-6 mb-1">
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center p-6">
                                    <div className="text-3xl mb-4">1.</div>
                                    <h3 className="text-xl font-semibold mb-2">Login / Register</h3>
                                    <p className="text-muted-foreground">Create a free account to get started</p>
                                </div>
                                <div className="text-center p-6">
                                    <div className="text-3xl mb-4">2.</div>
                                    <h3 className="text-xl font-semibold mb-2">Submit your information</h3>
                                    <p className="text-muted-foreground">Everything you need to create a professional CV</p>
                                </div>
                                <div className="text-center p-6">
                                    <div className="text-3xl mb-4">3.</div>
                                    <h3 className="text-xl font-semibold mb-2">Download your CV and apply to jobs</h3>
                                    <p className="text-muted-foreground">Now it's a matter of time to get your dream job</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
                        Start Building
                    </button>
                </div>

            </div>
            {/* Features Section */}
            <div className="bg-muted/50">
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
        </div>
    );
};

export default LandingScreen; 
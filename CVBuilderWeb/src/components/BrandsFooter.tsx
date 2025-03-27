import React from 'react';
import { motion } from "framer-motion";
const brands = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'LinkedIn', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' },
    { name: 'Twitter', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg' },
    { name: 'GitHub', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
    { name: 'Nvidia', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/NVIDIA_logo.svg' },
    { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Logo_of_Deloitte.svg' },
    { name: 'Pepsi', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Pepsi_logo_for_Regal_Cinemas.svg' },
    { name: 'KPMG', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Logo_of_KPMG.svg' },
    { name: 'Coca-Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/The_Coca-Cola_Company_logo.svg' },
    { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Accenture_logo.svg' },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'LinkedIn', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' },
    { name: 'Twitter', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg' },
    { name: 'GitHub', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
    { name: 'Nvidia', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/NVIDIA_logo.svg' },
    { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Logo_of_Deloitte.svg' },
    { name: 'Pepsi', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Pepsi_logo_for_Regal_Cinemas.svg' },
    { name: 'KPMG', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Logo_of_KPMG.svg' },
    { name: 'Coca-Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/The_Coca-Cola_Company_logo.svg' },
    { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Accenture_logo.svg' },
];

const BrandsFooter = () => {
    return (
        <div className="bg-gray-900 py-4 fixed bottom-0 w-full z-50">
            <div className="overflow-hidden whitespace-nowrap relative">
                <motion.div
                    className="flex space-x-10"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {[...brands, ...brands].map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center min-w-[120px] h-[40px] grayscale hover:grayscale-0 transition-all duration-300"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="h-8 w-auto object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div >
    );
};

export default BrandsFooter; 
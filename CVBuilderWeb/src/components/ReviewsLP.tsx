import { motion } from "framer-motion";

const reviews = [
    { name: "John Doe", text: "This AI-generated CV got me hired in 2 weeks!" },
    { name: "Sarah L.", text: "Simple, fast, and effective. Highly recommend!" },
    { name: "Michael B.", text: "Best CV tool I've used. Recruiters loved it!" },
    { name: "Emily R.", text: "Customizable and easy to use. 5 stars!" },
    { name: "David K.", text: "A game-changer for job seekers!" },
];

export function ReviewsBackground() {
    return (
        <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-8 ">
            {reviews.map((review, index) => (
                <motion.div
                    key={index}
                    className="bg-white shadow-lg rounded-xl p-4 w-64 text-sm opacity-30 hover:opacity-100 hover:scale-120 hover:-rotate-3 transition-all duration-300"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: index * 0.3 }}
                >
                    <p className="italic text-gray-800">"{review.text}"</p>
                    <p className="font-bold mt-2 text-gray-900">- {review.name}</p>
                </motion.div>
            ))}
        </div>
    );
}

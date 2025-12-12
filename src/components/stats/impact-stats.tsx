import { motion } from 'framer-motion';

const stats = [
    { label: "Global users reached", value: "2.2B" },
    { label: "Products shipped", value: "455" },
    { label: "Unicorns shipped", value: "18" }
];

const ImpactStats = () => {
    return (
        <footer className="bg-black text-white pt-32 md:pt-56 pb-20 px-4 md:px-12 border-t border-gray-900">
            {/* 
          1. Removed max-w-7xl to allow full width expansion 
          2. Used w-full to fill the available space defined by parent padding 
      */}
            <div className="w-full mx-auto mb-32">
                <h2 className="serif text-5xl md:text-8xl leading-none mb-24">
                    We measure our value in <br />
                    <span className="text-gray-500 italic">real-world impact</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-gray-800 pt-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="relative pl-8 flex flex-col justify-between h-[160px] md:h-[220px]">
                            {/* Vertical line decoration - Full height */}
                            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-blue-600"></div>

                            <h3 className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
                                {stat.label}
                            </h3>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                                className="serif text-7xl md:text-9xl font-light leading-none -ml-1"
                            >
                                {stat.value}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-gray-800 pt-8 text-sm text-gray-500 gap-6 md:gap-0">
                <p className="max-w-md leading-relaxed">
                    After shipping hundreds of products, there are a few key things we've learned are needed to do the best work.
                </p>
                <a href="#" className="hover:text-white transition-colors underline decoration-1 underline-offset-4" data-hover="true">
                    View the work →
                </a>
            </div>
        </footer>
    );
};

export default ImpactStats;

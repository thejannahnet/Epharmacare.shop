import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
    index: number;
}

const tagColors = [
    "bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300",
    "bg-accent-100 dark:bg-accent-900/40 text-accent-700 dark:text-accent-300",
    "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
    "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300",
];

export default function ProjectCard({
    title,
    description,
    tags,
    liveUrl,
    githubUrl,
    index,
}: ProjectCardProps) {
    // Generate a unique gradient for each card
    const gradients = [
        "from-primary-600 via-primary-500 to-accent-500",
        "from-accent-600 via-blue-500 to-primary-500",
        "from-purple-600 via-violet-500 to-primary-500",
        "from-emerald-600 via-teal-500 to-accent-500",
        "from-rose-600 via-pink-500 to-purple-500",
        "from-amber-600 via-orange-500 to-rose-500",
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group glass-card overflow-hidden"
        >
            {/* Image placeholder with gradient */}
            <div
                className={`relative h-48 sm:h-56 bg-gradient-to-br ${gradients[index % gradients.length]} overflow-hidden`}
            >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

                {/* Decorative shapes */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-32 h-32 border-2 border-white/40 rounded-2xl rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                    <div className="absolute w-24 h-24 border-2 border-white/30 rounded-full group-hover:scale-150 transition-transform duration-700" />
                </div>

                {/* Hover overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white transition-all duration-300"
                        aria-label={`Visit ${title} live site`}
                    >
                        <HiExternalLink size={20} />
                    </a>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white transition-all duration-300"
                        aria-label={`View ${title} source code`}
                    >
                        <FiGithub size={20} />
                    </a>
                </div>
            </div>

            {/* Card content */}
            <div className="p-6">
                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-sm text-dark-500 dark:text-dark-400 mb-4 line-clamp-2">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <span
                            key={tag}
                            className={`text-xs font-medium px-2.5 py-1 rounded-lg ${tagColors[i % tagColors.length]}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

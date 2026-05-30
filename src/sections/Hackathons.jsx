import { motion } from 'framer-motion'
import { FiAward, FiExternalLink, FiUsers, FiCpu } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'

export default function Hackathons() {
    const hackathons = [
        {
            title: 'Duality AI Offroad Semantic Scene Segmentation Challenge',
            project: 'TerraVision',
            date: '2026',
            icon: <FiCpu />,
            description: 'Developed a real-time, pixel-level semantic segmentation system for unstructured off-road environments using DINOv2 and ConvNeXt.',
            link: 'https://terra-vision-sigma.vercel.app/',
            certificate: '/Omkar Mohire_Certificate_Devnovate.pdf',
            color: 'from-purple-500 to-indigo-500',
        }
    ]

    return (
        <section id="hackathons" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-dark-400">
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading
                    title="Hackathons & Competitions"
                    subtitle="Putting skills to the test in high-pressure environments"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hackathons.map((hackathon, index) => (
                        <AnimatedSection key={hackathon.title} delay={index * 0.1}>
                            <motion.div
                                className="glass-card group relative overflow-hidden h-full flex flex-col p-6 rounded-2xl"
                                whileHover={{ y: -10 }}
                            >
                                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${hackathon.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />

                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${hackathon.color} text-white shadow-lg`}>
                                        <span className="text-2xl">{hackathon.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                                            {hackathon.title}
                                        </h3>
                                        <p className="text-sm font-bold text-gray-800 dark:text-gray-300 mt-1 mb-1">
                                            Project: {hackathon.project}
                                        </p>
                                        <span className="text-xs font-semibold px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-400">
                                            {hackathon.date}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                    {hackathon.description}
                                </p>

                                <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400">
                                            Participation
                                        </span>
                                        {hackathon.link !== '#' && (
                                            <motion.a
                                                href={hackathon.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white hover:text-primary-500 transition-colors"
                                                whileHover={{ x: 5 }}
                                            >
                                                View Project <FiExternalLink />
                                            </motion.a>
                                        )}
                                    </div>
                                    {hackathon.certificate && (
                                        <div className="flex justify-end mt-1">
                                            <motion.a
                                                href={hackathon.certificate}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-bold text-primary-600 dark:text-primary-400 hover:text-primary-500 transition-colors"
                                                whileHover={{ x: 5 }}
                                            >
                                                View Certificate <FiAward />
                                            </motion.a>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
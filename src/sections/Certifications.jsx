import { motion } from 'framer-motion'
import { FiAward, FiExternalLink, FiSearch } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'

export default function Certifications() {
    const certifications = [
        {
            title: 'Full Stack Developer',
            issuer: 'Certification Program',
            date: 'July 2026',
            icon: <FiAward />,
            link: '/Full Stack Developer .pdf',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'Data Analyst',
            issuer: 'Deloitte',
            date: 'May 2025',
            icon: <FiAward />,
            link: '/Deloitte certificate Data Analyst.pdf',
            color: 'from-yellow-500 to-orange-500',
        },
        {
            title: 'Generative AI Foundations',
            issuer: 'UpGrad',
            date: 'June 2025',
            icon: <FiAward />,
            link: '/Generative AI Foundations Certificate Program.pdf',
            color: 'from-green-500 to-emerald-500',
        },
    ]

    return (
        <section id="certifications" className="py-24 relative overflow-hidden bg-white dark:bg-dark-300">
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading
                    title="Certifications"
                    subtitle="Validation of my expertise and continuous learning journey"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <AnimatedSection key={cert.title} delay={index * 0.1}>
                            <motion.div
                                className="glass-card group relative overflow-hidden"
                                whileHover={{ y: -10 }}
                            >
                                {/* Background Glow */}
                                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />

                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${cert.color} text-white shadow-lg`}>
                                        <span className="text-2xl">{cert.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold dark:text-white group-hover:text-primary-500 transition-colors">
                                            {cert.title}
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400 font-medium">
                                            {cert.issuer} • {cert.date}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400">
                                        Verified Credential
                                    </span>
                                    <motion.a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-500 transition-colors"
                                        whileHover={{ x: 5 }}
                                    >
                                        View <FiExternalLink />
                                    </motion.a>
                                </div>

                                {/* Shimmer Effect on Hover */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: '100%' }}
                                    transition={{ duration: 0.8 }}
                                />
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Placeholder for more */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <p className="text-gray-500 dark:text-gray-400 mb-4 font-mono text-sm">
                        Searching for more credentials...
                    </p>
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 dark:border-white/10 text-gray-500">
                        <FiSearch className="animate-pulse" />
                        <span className="text-sm">And growing every day</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

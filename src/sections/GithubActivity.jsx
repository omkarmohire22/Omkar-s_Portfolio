import { motion } from 'framer-motion'
import { GitHubCalendar } from 'react-github-calendar'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'

export default function GithubActivity() {
    const username = 'omkarmohire22'

    const theme = {
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    }

    return (
        <section className="py-24 relative overflow-hidden bg-gray-50 dark:bg-dark-400">
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading
                    title="Coding Activity"
                    subtitle="My open-source contributions and daily coding habit on GitHub"
                />

                <AnimatedSection className="flex justify-center">
                    <motion.div
                        className="glass-card p-8 md:p-12 w-full max-w-5xl overflow-hidden"
                        whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-500 shadow-lg">
                                    <img
                                        src={`https://github.com/${username}.png`}
                                        alt={username}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold dark:text-white">@{username}</h3>
                                    <a
                                        href={`https://github.com/${username}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-500 font-medium hover:underline flex items-center gap-1"
                                    >
                                        View GitHub Profile
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="text-center px-6 py-3 rounded-2xl bg-white/50 dark:bg-dark-100/50 border border-gray-200 dark:border-white/10">
                                    <div className="text-2xl font-black text-primary-500">100%</div>
                                    <div className="text-[10px] uppercase font-bold text-gray-400">Commitment</div>
                                </div>
                                <div className="text-center px-6 py-3 rounded-2xl bg-white/50 dark:bg-dark-100/50 border border-gray-200 dark:border-white/10">
                                    <div className="text-2xl font-black text-accent-500">Active</div>
                                    <div className="text-[10px] uppercase font-bold text-gray-400">Status</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center overflow-x-auto pb-4 custom-scrollbar">
                            <GitHubCalendar
                                username={username}
                                theme={theme}
                                blockSize={14}
                                blockMargin={5}
                                fontSize={14}
                            />
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-wrap justify-center gap-8">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-primary-500"></span>
                                <span className="text-sm text-gray-600 dark:text-gray-400">Consistent Pusher</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-accent-500"></span>
                                <span className="text-sm text-gray-600 dark:text-gray-400">Quality Focused</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                <span className="text-sm text-gray-600 dark:text-gray-400">Always Learning</span>
                            </div>
                        </div>
                    </motion.div>
                </AnimatedSection>
            </div>
        </section>
    )
}

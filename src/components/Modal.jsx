import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { useEffect } from 'react'

export default function Modal({ isOpen, onClose, children, title }) {
    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [onClose])

    // Lock scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-dark-400/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white dark:bg-dark-200 rounded-3xl shadow-2xl border border-gray-200 dark:border-white/10 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-white/5">
                            <h2 className="text-2xl font-display font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                                {title}
                            </h2>
                            <motion.button
                                whileHover={{ rotate: 90, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={onClose}
                                className="p-2 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors"
                            >
                                <FiX className="w-6 h-6" />
                            </motion.button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

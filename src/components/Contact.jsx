import { section } from "framer-motion/client";


const Contact = ({ darkMode }) => {
    return (
        <section
        id="contact"
        style={{
            backgroundColor:darkMode ? '#111827' : '#f9fafb'
        }}
        className='py-12 sm:py-20 lg:py-24 overflow-hidden'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-8 sm:mb-10 md:mb-12'
                data-aos="fade-up">
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3'
                    style={{
                        color: darkMode ? 'white' : '#1f2937'
                    }}>
                        Get In 
                        <span 
                        style={{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip:'text',
                            color: 'transparent'
                        }}> 
                            Touch
                        </span> 
                    </h2>
                        <p 
                        className='text-base sm:text-lg md:text-lg md:text-xl'
                        style={{
                            color: darkMode ? '#d1d5db' : '#6b7280'
                        }}>
                            Let's discuss your project 
                        </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center'>
                    <div className='flex justify-center order-2 lg:order-1'
                    data-aos="fade-right">
                        <img 
                        src={'/contact-illustration.png'}
                        alt='Contact '
                        className='w-full max-w-xs sm:max-w-sm lg:max-w-md'
                        />

                    </div>

                </div>
            </div>
            
        </section>
    )
}
export default Contact;
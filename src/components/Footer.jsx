import { footer } from "framer-motion/client";

const Footer = ({ darkMode }) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer
        style={{
            background:darkMode
            ? "linear-linear(to bottom, #000000, #111827)"
            : "linear-linear(to bottom, #f9f4f6, #e5e7eb)",
            borderColor: darkMode ? "#374151" : "#d1d5db",
        }}
        className="border-t">
            <div className="container mx-auto py-4 py-8">
                <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                    <div className='text-center md:text-left'>
                        <h3 className='text-2xl font-bold mb-2'
                        style={{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}>
                            Portfolio
                        </h3>
                        <p>
                            
                        </p>

                    </div>

                </div>

            </div>
        </footer>

    )

}

export default Footer;
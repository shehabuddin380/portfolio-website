import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import CV from '../assets/CV.pdf'
import { a } from 'framer-motion/client';

const Hero = ({darkMode}) =>{
    const socialIcons = [
        { icon: instagram, alt: 'Instagram' },
        { icon: linkedin, alt: 'LinkedIn' },
        { icon: github, alt: 'GitHub' },
    ];
    const darkThems={
        textPrimary:'text-white',
        textSecondary:'text-gray-300',
        buttonSecondary:`text-white border-2 border-orange-500 hover:bg-orenge-600`,
        decorativeCircle:'bg-orange-500 opacity-10',
    } ;

    const lightThems={
        textPrimary:'text-gray-900',
        textSecondary:'text-gray-700',
        buttonSecondary:`text-gray-800 border-2 border-orange-500 hover:bg-orenge-500 hover:text-white`,
        decorativeCircle:'bg-orange-400 opacity-20',
    };
    const themes = darkMode ? darkThems : lightThems;
    return(
        <div className='relative overflow-hidden min-h-screen flex flex-col'>
            <select 
             id='home'
             data-aos='fade-up'
             data-aos-delay='250'
             className='body-font z-10'>
                
            </select>
            <div className='container mx-auto flex px4 sm:px-8 lg:px14 py-12 lg:py-32 flex-col lg:flex-rew items-center justify-between lg:mt-0 mt-14'>
                    <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-16 lg:mb-0'>
                        <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 sm:mb-7 w-full'>
                        {socialIcons.map((social, index) => (
                            <a 
                            key={index}
                            href="#" 
                            data-aos-delay={`${400 + index * 100}`}
                            className='transform hover:scale-110 transition-transform duration-300'
                            >
                                <img src={social.icon} 
                                alt={social.name}
                                className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${darkMode ? '' : 'filter brightness-75'}`} />
                            </a>
                        ))}
                        </div>
                        <h1 children={`title-font text-3xl sm:text-4xl sm:text-4xl lg:text-5xl mb-4 font-bold ${themes.textPrimary}`}
                         data-aos='fade-up'
                         data-aos-delay='500'>
                            Hi, I'm Shehab
                        </h1>
                        <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${themes.textSecondary}`}
                         data-aos='fade-up'
                         data-aos-delay='600'>
                            I am a Backend Developer with a strong interest in designing and developing robust server-side applications. I have experience working with APIs, databases, and backend architecture, and I am continuously improving my skills to build scalable and efficient systems.
                        </p>
                        {/*Buttons*/}
                        <div className='w-full pt-4 sm:pt-6'>
                            <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'
                            data-aos='fade-up'
                            data-aos-delay='700'>
                                <a href={CV} download className='w-full sm:w-auto'>
                                    <button className='w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform '>
                                        <DownloadIcon className='w-4 h-4 sm:h-5 sm:w-5 mr-2'/>
                                        Download CV
                                    </button>

                                </a>

                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Hero;
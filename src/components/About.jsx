import CVPhoto from '../assets/CVPhoto.png'

const About =(darkMode)=>{
    return (
        <section id="about" className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6${
            darkMode ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <figure
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1">
                    <div className="relative w-75 h-75 lg:w-96 lg:h-96">
                        <div className=" absolute -inset-4 lg:-inset-20 bg-linear-to-1 from-[#f97316] via-[#fb923c] to-[#f59e0b] rotate-12 star-shape z-0"
                        data-aos="zoom-in"
                        data-aos-delay='600'>
                        </div>
                        <img src={CVPhoto} alt="Shehab" 
                        className="absolute inset-0  w-full h-full object-cover z-10 transition-all duration-300 " 
                        data-aos="zoom-in"
                        data-aos-delay="400"/>
                    </div>
                </figure>
                <article
                data-aos="fade-up"
                data-aos-delay="400"
                
                className='text-center lg:text-left relattive order-1 lg:order-2'>
                    <header>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text'
                        data-aos="fade-up"
                        data-aos-delay="400">
                            About Me
                        </h1>
                    </header>
                    <p>
                        Hi, I’m Md. Shehab Uddin, a student and passionate developer with a strong interest in backend development using Django.
                        I have experience with programming languages like C, C++, Python, and JavaScript, along with frontend technologies such as HTML, CSS, and Tailwind CSS.
                        I also have experience in designing user interfaces using Figma, which helps me build clean and user-friendly applications. 
                        I enjoy learning new technologies and improving my skills every day. Coding is not just my work, it’s something I truly enjoy.
                        My goal is to become a full-stack developer and create impactful digital products in the future.
                    </p>

                </article>

            </div>

        </section>
    )

}
export default About;
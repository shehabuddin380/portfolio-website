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
                    <p className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed bg-linear-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    data-aos="fade-up"
                    data-aos-delay="500">
                        Hi, I’m Md. Shehab Uddin, a dedicated student and passionate web developer with a strong interest in building modern and scalable web applications. I primarily focus on backend development using Django, where I enjoy working with logic, databases, and building efficient systems.
                        Alongside backend development, I have solid knowledge of frontend technologies and enjoy creating responsive and user-friendly interfaces. I work with React to build dynamic web applications and use HTML, CSS, and Tailwind CSS to design clean and modern layouts.
                        I also have experience in UI/UX design using Figma, which helps me understand how to create visually appealing and user-centered designs. This combination of development and design allows me to build complete and well-structured projects.
                        I have experience with multiple programming languages including C, C++, Python, and JavaScript, which strengthens my problem-solving ability and understanding of different programming concepts. I am always curious to learn new technologies and continuously improve my skills.
                        Coding is not just something I study — it’s something I genuinely enjoy doing. I like solving problems, exploring new ideas, and turning them into real-world applications.
                        My goal is to become a skilled full-stack developer and work on impactful projects that make a difference. I am committed to growing as a developer and building high-quality digital solutions in the future.
                        I’m currently open to learning opportunities and collaborations.
                    </p>
                </article>
            </div>

        </section>
    )

}
export default About;
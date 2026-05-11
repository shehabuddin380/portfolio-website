import { div } from "framer-motion/client";
import {FaGithub} from ' react-icons/fa';


const Projects = ({darkMode}) => {
    const projects = [
        {
            id:1,
            title:'PhiMart',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:project1,
            tags:['Python','Django']
        },
        {
            id:2,
            title:'PhiMart Client',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:project1,
            tags:['React', 'JavaScript']
        },
        {
            id:3,
            title:'Hotel Booking',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:project1,
            tags:['Python','Django']
        },
        {
            id:4,
            title:'Hotel Frontend',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:project1,
            tags:['React', 'JavaScript']
        },
        {
            id:5,
            title:'Task Managment',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:project1,
            tags:['Python','Django']
        },
    ]
    return (
        <section 
        id='projects'
        style={{
            backgroundColor: darkMode ? '#111827' : '##f9fafb'
        }}
        className='relative py-24'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-10 data-aos="fade-up"'>
                    <h2
                    className="text-3xl sm:text-4xl font-bold mb-3"
                    style={{
                        color: darkMode ? 'white' : '#1f2937'
                    }}>
                
                    My<span
                    style={{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            color : 'transparent'
                        }}>
                            Projects
                    </span>
                    </h2>
                    <p
                    className='max-w-xl mx-auto'
                    style={{
                        color: darkMode ? '#d1d5db' : '#6b7280'
                    }}>
                        A showcase of my recent work
                    </p>
                </div>
                <div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                    {projects.map((project, index) => (
                        <div
                        key={project.id}
                        style={{
                            background: darkMode
                            ? 'linear-gradient(to right, #1f2937, #111827)'
                            : 'linear-gradient(to right, #ffffff, #f59e0b)',
                            borderColor: darkMode ? '#374151' : '#e5e7eb'
                        }}
                        className='group rounded-xl border duration-300 hover:border-orange-500/50 transition-all'
                        data-aos="fade-up"
                        data-aos-delay={index * 100}>
                            <div className='h-36 overflow-hidden rounded-t-xl'>
                                <img 
                                src={project.image} 
                                alt={project.title} 
                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'/>
                            </div>
                            <div className='p-4'>
                                <h3
                                className='text-lg font-bold mb-2'
                                style={{
                                    color: darkMode ? 'white' : '#1f2937'
                                }}>
                                    {project.title}
                                    
                                </h3>
                                <p 
                                className='text-sm mb-3'
                                style={{
                                    color: darkMode ? '#d1d5db' : '#6b7280'
                                }}>
                                    {project.desc}
                                </p>
                                <div className='flex flex-wrap gap-1.5 mb-4'>
                                    {project.tags.map((tag, idx) => (
                                        <span
                                        key={idx}
                                        style={{
                                            backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                            color: darkMode ? '#d1d5db' : '#4b5563'
                                        }}
                                        className='px-2 py-1 text-xs rounded-full'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div
                                className='flex gap-3'>
                                    <a href="#"
                                    style={{
                                            backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                            color: darkMode ?  '#white' : '#374151'
                                        }}
                                        className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors '
                                        data-aos="fade-up"
                                        data-aos-delay='300'>
                                        <FaGithub className='text-sm' />
                                    </a>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>

    )
}
export default Projects;
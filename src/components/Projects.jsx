import { div } from "framer-motion/client";



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
                            : 'linear-gradient(to right, #ffffff, #f59e0b)'
                            borderColor: darkMode ? '#374151' : 'e5e7eb'
                        }}>
                            
                        </div>

                    ))}

                </div>

            </div>

        </section>

    )
}
export default Projects;
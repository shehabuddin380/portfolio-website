


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
                <div className='text-center sm:text-4xl font-bold mb-3'>
                    <h2
                    className=""
                    style={{
                        color: darkMode ? 'white' : '#1f2937'
                    }}>
                </h2>
                    My<span></span>

                </div>

            </div>

        </section>

    )
}
export default Projects;
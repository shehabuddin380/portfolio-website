import C_programming from '../assets/c-programming.png'
import C_Plus_plus from '../assets/c++.png'
import Python from '../assets/python.png'
import JavaScript from '../assets/javascript.png'
import Django from '../assets/django.png'
import React from '../assets/react.png' 
import Figma from '../assets/figma.png'
import tailwindcss from '../assets/tailwindcss.png'




const Skills=({darkMode})=>{
    const skills=[
        {name:'C Programming', icon: C_programming, level:95, color:'from-orange-500 to-amber-500'},
        {name:'C++ Programming', icon: C_Plus_plus, level:85, color:'from-blue-500 to-cyan-500'},
        {name:'Python', icon: Python, level:90, color:'from-yellow-500 to-amber-500'},
        {name:'JavaScript', icon: JavaScript, level:85, color:'from-cyan-500 to-blue-500'},
        {name:'Django', icon: Django, level:80, color:'from-teal-500 to-cyan-500'},
        {name:'React', icon: React, level:85, color:'from-green-500 to-emerald-500'},
        {name:'Figma', icon: Figma, level:75, color:'from-blue-500 to-indigo-500'},
        {name:'Tailwind CSS', icon: tailwindcss, level:80, color:'from-red-500 to-orange-500'}
    ]
    return(
        <section id="skills"
        style={{
            backgroundColor:darkMode ? "#111827" : "#f9fafb"
        }}
        className='py-14 relative overflow-hidden'>
            <div className='py-14 relative overflow-hidden'>
                <div className='container px-5 py-14 mx-auto'>
                    <div className='text-center mb-5 py-14 mx-auto'>
                        <h1 className='sm:text-4xl text-3xl font-bold title-font mb-4 '
                        style={{
                            color : darkMode ? 'wheat' : '#1f2937'
                        }}>
                            My  <span style={{background: 'linear-gradient(to right, #f97316,#f59e0b)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}>
                                Skills
                            </span>
                        </h1>
                            <p className='text-lg max-w-2xl mxauto leading-relaxed'
                            style={{
                                color : darkMode ? '#d1d5db' : '#4b5563'
                            }}>
                                I have experience working with multiple programming languages and modern web technologies, specializing in building efficient, responsive, and scalable web applications. I am passionate about learning new tools and continuously improving my skills to create user-friendly and high-quality solutions.
                            </p>
                    </div>
                            <div className='flex flex-wrap -m-4'>

                            </div>
                </div>
            </div>  
        </section>
    )   
}
export default Skills
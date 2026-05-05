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
        <section id="skills">  
        </section>
    )   
}
export default Skills
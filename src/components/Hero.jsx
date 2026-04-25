import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

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
        <div >Hero</div>
    )
}
export default Hero;
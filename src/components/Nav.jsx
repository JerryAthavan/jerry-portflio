import { useState, useEffect } from "react";
function Nav(){
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({behavior: 'smooth'})
    };
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
  const sections = ['about', 'skills', 'projects', 'experience', 'contact']

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight * 0.4

    let current = sections[0]
    for (const id of sections) {
      const el = document.getElementById(id)
      if (el && el.offsetTop <= scrollPosition) {
        current = id
      }
    }
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10
  if (atBottom) {
    current = sections[sections.length - 1]
  }
    setActiveSection(current)
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll()
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

    return(
        <nav className="sticky top-0 z-50 bg-surface border-b border-border-soft">
            <div className="flex justify-center items-center gap-6 px-6 py-4">
                <span className="font-mono font-bold text-white">jerry<span className="text-green">.dev</span></span>
                <button className={`font-mono text-sm pb-1 border-b-2 ${
                    activeSection === 'about'
                    ? 'text-white border-blue':
                    'text-text-dim border-transparent hover:text-white'
                }`}
                onClick={() => scrollToSection('about')}>
                    About
                </button>
                <button className={`font-mono text-sm pb-1 border-b-2 ${
                    activeSection === 'skills'
                    ? 'text-white border-blue'
                    : 'text-text-dim border-transparent hover:text-white'
                }`}
                onClick={() => scrollToSection('skills')}>
                    Skills</button>
                <button className={`font-mono text-sm pb-1 border-b-2 ${
                    activeSection === 'projects'
                    ? 'text-white border-blue'
                    : 'text-text-dim border-transparent hover:text-white'
                }`}
                onClick={() => scrollToSection('projects')}>
                    Projects</button>
                <button className={`font-mono text-sm pb-1 border-b-2 ${
                    activeSection === 'experience'
                    ? 'text-white border-blue'
                    : 'text-text-dim border-transparent hover:text-white'
                }`}
                onClick={() => scrollToSection('experience')}>
                    Experience</button>
                <button className={`font-mono text-sm pb-1 border-b-2 ${
                    activeSection === 'contact'
                    ? 'text-white border-blue'
                    : 'text-text-dim border-transparent hover:text-white'
                }`}
                onClick={() => scrollToSection('contact')}>
                    Contact</button>
            </div>
        </nav>
    );
}
export default Nav;
import { useState, useEffect } from "react"
function Hero() {
    const fullname = 'Jerry Athavan R.G'
    const fullRole = 'React.js & Full Stack Developer'
    const fullSummary = 'Computer Science graduate (fresher) skilled in building full-stack web applications with React.js, Tailwind CSS, Python, FastAPI, and Java. Built and deployed a live company website, and worked as a frontend trainee on real client projects.'
    const [typedName, setTypedName] = useState('')
    const [typedRole, setTypedRoll] = useState('')
    const [typedSummary, settypedSummary] = useState('')
    useEffect(()=>{
        let nameindex = 0
        const nameinterval = setInterval(()=>{
            setTypedName(fullname.slice(0, nameindex+1))
            nameindex++
            if (nameindex === fullname.length){
                clearInterval(nameinterval)
                startRoleTyping()
            }
        }, 60)

        function startRoleTyping(){
            let roleIndex = 0
            const roleInterval = setInterval(()=>{
                setTypedRoll(fullRole.slice(0, roleIndex+1))
                roleIndex++
                if (roleIndex === fullRole.length){
                    clearInterval(roleInterval)
                    startSummaryTyping()
                }
            }, 40)
        }
        function startSummaryTyping(){
            let desIndex = 0
            const desinterval = setInterval(()=>{
                settypedSummary(fullSummary.slice(0, desIndex+1))
                desIndex++
                if(desIndex === fullSummary.length){
                    clearInterval(desinterval)
                }
            }, 30)

        }
        return()=> clearInterval(nameinterval)
    }, [])

  return (
    <header className="max-w-[920px] mx-auto px-6 py-18">
      <div className="bg-surface border border-border rounded-lg overflow-hidden shadow-xl">
        <div className="flex items-center gap-2 px-3.5 py-2.5 bg-surface-2 border-b border-border">
          
          <span className="w-3 h-3 rounded-full bg-border"></span>
          <span className="w-3 h-3 rounded-full bg-border"></span>
          <span className="w-3 h-3 rounded-full bg-border"></span>
          <span className="ml-2 text-xs text-text-faint font-mono ">jerry@portfolio — zsh</span>
        </div>
        <div className="px-6 pt-6 pb-7 bg-surface">
          
          <p className="font-mono text-sm text-text-dim mb-1.5">
            <span className="font-mono text-green">jerry@dev</span>
            <span className="text-blue">:~$</span> whoami
          </p>
          <h1 className="font-mono text-3xl text-white font-extrabold mt-3 mb-1.5 tracking-tight">{typedName}{typedName.length < fullname.length && <span className="cursor"></span>}</h1>
          <p className="text-gold font-mono mb-3.5 ">{typedRole}{typedName.length === fullname.length && typedRole.length < fullRole.length && <span className="cursor"></span>}</p>
          <p className="text-text-dim font-sans text-sm leading-relaxed ">{typedSummary}{typedRole.length === fullRole.length && typedSummary.length < fullSummary.length && <span className="cursor"></span>}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-6">
        <a href="#projects" className="bg-blue text-bg p-3 rounded font-mono font-bold text-sm border border-blue">view_projects()</a>
        <a href="Jerry_Athavan_Resume.pdf" download className="bg-surface-2 text-text text-sm font-mono p-3 rounded border border-border">↓ download_resume.pdf</a>
        <a href="#contact" className="bg-surface-2 text-text text-sm font-mono p-3 rounded border border-border">get_in_touch()</a>
      </div>
      <div className="flex items-center gap-2 mt-5">
        <span className="w-2 h-2 bg-green rounded-full pulse-dot"></span>
        <span className="text-green text-xs font-mono tracking-tight">open to full-time frontend / full-stack roles</span>
      </div>
    </header>
  )
}

export default Hero
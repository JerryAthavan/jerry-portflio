function About(){
    return(
        <section id="about" className="max-w-[920px] mx-auto px-6 py-16 border-t border-b border-border-soft">
            <div className="mb-8">
                <span className="text-xs text-text-faint font-mono mr-2.5">01</span>
                <span className="font-mono font-bold text-xl">
                    <span className="text-pink mr-3">const</span>
                    <span className="text-blue mr-3">about</span>
                    <span className="text-text-faint">= {"{}"}</span>
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <p className="text-text-dim font-sans text-sm mb-4">I'm a Computer Science graduate who builds full-stack web apps — a React frontend connected to a working backend and database.</p>
                    <p className="text-text-dim font-sans text-sm mb-4">I built La Vigroh's company website from scratch, including a dark/light theme toggle, and deployed it live. I also worked as a frontend trainee on UfileFbar, a real tax platform, where I handled mobile responsiveness.</p>
                    <p className="text-text-dim font-sans text-sm ">I'm now looking for a full-time frontend or full-stack role where I can keep building and keep learning.</p>
                </div>
                <div className="border border-border font-mono rounded bg-surface">
                    <div className="bg-surface-2 p-3 text-text-faint text-xs upercase tracking-wide border-b border-border">Quick_Facts</div>
                    
                    <div className="flex flex-row justify-between gap-4 px-4 py-3 border-b border-border">
                        <span className="text-text-faint text-xs">location</span>
                        <span className="text-text text-sm font-sans">Tamil Nadu, India</span>
                    </div>
                    <div className="flex flex-row justify-between px-4 py-3 border-b border-border">
                        <span className="text-text-faint text-xs shrink-0">education</span>
                        <span className="text-text text-sm font-sans text-right">B.E. CSE, PSRR College of Engineering</span>
                    </div>
                    <div className="flex flex-row justify-between px-4 py-3 border-b border-border">
                        <span className="text-text-faint text-xs">cgpa</span>
                        <span className="text-text text-sm font-sans">8.25</span>
                    </div>
                    <div className="flex flex-row justify-between px-4 py-3 border-b border-border">
                        <span className="text-text-faint text-xs">grad</span>
                        <span className="text-text text-sm font-sans">Nov 2022 – May 2026</span>
                    </div>
                    <div className="flex flex-row justify-between px-4 py-3 ">
                        <span className="text-text-faint text-xs">status</span>
                        <span className="text-text text-sm font-sans">Open to work</span>
                    </div>
                    </div>
                    
                </div>
            
        </section>
    );
}
export default About;
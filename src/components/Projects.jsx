const projects = [
  {
    title: 'La Vigroh — Company Website',
    badge: 'live · built end to end',
    description: "Designed and built the company's website from scratch — layout, styling, and deployment, all mine.",
    bullets: [
      'Full React + Tailwind build, fully responsive across mobile, tablet, and desktop',
      'Implemented a dark/light theme toggle with saved user preference',
      'Deployed and maintained live on Vercel'
    ],
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    link: "https://jerry-portflio.vercel.app/"
  },
  {
    title: 'UfileFbar — FBAR Filing Platform',
    badge: 'live · frontend trainee',
    description: 'A tax-compliance web platform for filing FBAR reports. Joined as a frontend trainee under a senior developer, contributing directly to a production codebase used by real clients.',
    bullets: [
      'Built and shipped full mobile/tablet responsiveness across the application',
      'Debugged CSS specificity and cascade conflicts across component boundaries in a growing React codebase'
    ],
    tags: ['React', 'Vite'],
    link: 'https://ufilefbar.com'
  },
  {
    title: 'Student Management System',
    badge: 'full stack',
    description: 'A role-based student management application with three distinct dashboards.',
    bullets: [
      'FastAPI backend with a MySQL database and SQLAlchemy models',
      'Secure login with JWT and role-based access across Admin, Teacher, and Student roles',
      'Three role-based dashboards with full CRUD operations and real-time filtering'
    ],
    tags: ['React', 'FastAPI', 'MySQL', 'JWT'],
    link: null
  },
  {
    title: 'Smart Assistive Glass for the Visually Impaired',
    badge: 'team project',
    description: 'A wearable assistive device prototype combining computer vision and audio feedback.',
    bullets: [
      'Four core features: text detection, speech output, face recognition, and obstacle detection',
      'Converted detected text to audio using Python text-to-speech libraries'
    ],
    tags: ['Python', 'Computer Vision', 'Text-to-Speech'],
    link: null
  }
]
function Projects() {
    
  return (
    <section id="projects" className="max-w-[920px] mx-auto px-6 py-16 border-b border-border-soft">
        <div className="mb-8">
            <span className="text-xs text-text-faint font-mono mr-2.5">03</span>
            <span className="font-mono font-bold text-xl">
                <span className="text-pink mr-3">function</span>
                <span className="text-blue mr-3">Projects</span>
            </span>
        </div>

        <div className="flex flex-col gap-4 ">
            {
                projects.map((project)=>(
                    <div key={project.title} className="bg-surface border border-border rounded-lg p-6 hover:border-[#3a4250] transition-colors">
                        <div className="flex justify-between items-start gap-4 flex-wrap mb-2">
                            <span className="text-[17px] font-bold text-text font-sans">{project.title}</span>
                            <span className={`font-mono text-[10.5px] border rounded-full px-2 py-0.5 whitespace-nowrap ${
                                project.badge.includes('live')
                                ? 'text-green border-green/35'
                                : 'text-text-faint border-border'
                            }`}>{project.badge}</span>
                        </div>
                        <p className="text-text-dim text-[13.5px] mb-3.5">{project.description}</p>
                        <ul className=" text-text-dim text-[13.5px] mb-3.5 ml-4 mt-2 list-disc">
                            {project.bullets.map((bullet)=>(
                                <li className="mb-1" key={bullet}>{bullet}</li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5 mb-3.5">
                            {project.tags.map((tag)=>(
                                <span className="text-blue bg-[rgba(88,166,255,0.08)] border border-[rgba(88,166,255,0.25)] text-xs rounded px-2.5 py-1 font-mono" key={tag}>{tag}</span>
                            ))}
                        </div>

                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener" 
                            className="text-blue font-mono text-[12.5px]">↗ live site</a>
                        )
                        }
                        
                    </div>
                    
                    
                 ))
            }
            
        </div>
         <div className="bg-surface mt-4 border border-dashed border-border rounded-lg p-7 flex items-center justify-center text-text-faint font-mono text-[13px]">
             + more projects in progress — check back soon
         </div>
        
    </section>
  );
}

export default Projects



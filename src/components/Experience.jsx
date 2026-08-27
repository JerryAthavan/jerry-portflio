const experience = [
  {
    role: 'Frontend Development Trainee',
    org: 'La Vigroh',
    context: 'Website build & client project contribution',
    bullets: [
      'Built the company\'s website from scratch using React.js and Tailwind CSS, including a dark/light theme toggle with saved preference',
      'Made it fully responsive across mobile, tablet, and desktop, and deployed it live on Vercel',
      'Applied the same responsive design approach to the UfileFbar frontend as a trainee under a senior developer',
      'Coordinated project meetings and updates between team members'
    ]
  },
  {
    role: 'National Level Hackathon',
    org: 'Syed Ammal College of Engineering',
    context: 'April 2025',
    bullets: [
      'Contributed to a Healthcare Monitoring Application prototype',
      'Worked on backend components using Java and SQL'
    ]
  }
]

function Experience() {
  return (
    <section id="experience" className="max-w-[920px] mx-auto px-6 py-16 border-b border-border-soft">
      <div className="mb-8">
        <span className="text-xs text-text-faint font-mono mr-2.5">04</span>
            <span className="font-mono font-bold text-xl">
                <span className="text-pink mr-3">##</span>
                <span className="text-blue mr-3">Experience</span>
            </span>

      </div>

      <div className="relative pl-6">
        <div className="absolute left-[5px] top-1 bottom-1 w-px bg-border"></div>
        {experience.map((item) => (
          <div key={item.role} className="relative pb-8">
            <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-bg border-2 border-blue"></div>
            <p className="text-xs text-text-faint mb-1">{item.context}</p>
            <h3 className=" font-mono font-bold text-text">{item.role}</h3>
            <p className="text-gold text-sm mb-2">{item.org}</p>
            <ul className="ml-4 list-disc text-text-dim text-sm">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="mb-1">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
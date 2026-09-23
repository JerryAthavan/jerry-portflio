import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
function Contact(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState('')
    const [sending, setSending] = useState(false)
    const messageRef = useRef(null)

    const handleMessageChange = (e)=>{
        setMessage(e.target.value)
        e.target.style.height = 'auto'
        e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px'
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setSending(true)
        setStatus('')

        emailjs.send(
            'service_eowqblx',
            'template_zc1g9uw',
            { name, email, message },
            'tA-pl39Dyi2Ob2q5A'
        )
        .then(()=>{
            setStatus('ok')
            setName('')
            setEmail('')
            setMessage('')
            if (messageRef.current) messageRef.current.style.height = 'auto'
        })
        .catch(()=>{
            setStatus('err')
        })
        .finally(()=>{
            setSending(false)
        })
    }
    return(
        <section id="contact" className="max-w-[920px] mx-auto px-6 py-16">
            <div className="mb-8">
            <span className="text-xs text-text-faint font-mono mr-2.5">05</span>
            <span className="font-mono font-bold text-xl">
                <span className="text-pink mr-3">async function</span>
                <span className="text-blue mr-3">contact<span className="text-text-dim">()</span></span>
            </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div  className="flex flex-col gap-3">
                <a href="mailto:jerryathavan7@gmail.com" 
                className="flex items-center gap-3 px-3.5 py-3 border border-border rounded bg-surface text-[13.5px] text-text hover:border-blue hover:no-underline">
                    <span>email</span>
                    <span>jerryathavan7@gmail.com</span>
                </a>
                <a href="tel:+916374175435"
                className="flex items-center gap-3 px-3.5 py-3 border border-border rounded bg-surface text-[13.5px] text-text hover:border-blue hover:no-underline">
                    <span>phone</span>
                    <span>+91 63741 75435</span>
                 </a>
                    <a href="https://www.linkedin.com/in/jerryathavan/" target="_blank" rel="noopener"
                    className="flex items-center gap-3 px-3.5 py-3 border border-border rounded bg-surface text-[13.5px] text-text hover:border-blue hover:no-underline">
                    <span>linkedin</span>
                    <span>/in/jerryathavan</span>
                  </a>
                  <a href="#" target="_blank" rel="noopener"
                  className="flex items-center gap-3 px-3.5 py-3 border border-border rounded bg-surface text-[13.5px] text-text hover:border-blue hover:no-underline">
                    <span>github</span>
                    <span>add your link</span>
                  </a>
            </div>
                <form onSubmit={handleSubmit}  className="flex flex-col gap-3">
                    <div>
                        <label htmlFor="name"
                        className="block font-mono text-[11.5px] text-text-faint mb-1.5 uppercase tracking-wide"
                        >name</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e)=> setName(e.target.value)}
                        className="w-full bg-surface border border-border rounded text-text px-3 py-2.5 font-sans text-[13.5px] focus:border-blue focus:outline-none"/>
                    </div>
                    <div>
                        <label htmlFor="email" 
                         className="block font-mono text-[11.5px] text-text-faint mb-1.5 uppercase tracking-wide"
                         >email</label>
                        <input type="email" id="email" name="email"  value={email} onChange={(e)=> setEmail(e.target.value)}
                         className="w-full bg-surface border border-border rounded text-text px-3 py-2.5 font-sans text-[13.5px] focus:border-blue focus:outline-none"/>
                    </div>
                    <div>
                        <label htmlFor="message"
                        className="block font-mono text-[11.5px] text-text-faint mb-1.5 uppercase tracking-wide"
                        >message</label>
                        <div className="flex items-end gap-2 bg-surface border border-border rounded-[22px] py-2 pl-4 pr-2 max-w-[420px] focus-within:border-blue">
                            <textarea 
                            ref={messageRef}
                             name="message"
                             id="message"
                              rows="1"
                             placeholder="Say hello..." value={message} onChange={handleMessageChange}
                             className=" flex-1 bg-transparent border-none text-text font-sans text-[13.5px] leading-normal resize-none max-h-[120px] py-1.5 focus:outline-none"
                             ></textarea>
                            <button type="submit" disabled={sending} className="shrink-0 w-[34px] h-[34px] rounded-full bg-blue text-bg flex items-center justify-center hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                                strokeLinejoin="round" className="w-4 h-4 ">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </div>
                        {status === 'ok' && <p className="font-mono text-xs text-green mt-1">Message sent - thanks! I'll get back to you soon.</p>}
                        {status === 'err' && <p className="font-mono text-xs text-pink mt-1">Something went wrong. Please try emailing me directly</p>}
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Contact
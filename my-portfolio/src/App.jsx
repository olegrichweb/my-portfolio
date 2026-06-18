function App() {
  return (
    <div>

      {/* Nav */}
      <nav style={{position:'fixed', top:0, width:'100%', zIndex:100, background:'rgba(0,0,0,0.3)', backdropFilter:'blur(10px)', borderBottom:'1px solid rgba(255,255,255,0.05)', padding:'16px 40px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <span style={{color:'#a78bfa', fontWeight:700, fontSize:'1.1rem'}}>Heiligard</span>
        <div style={{display:'flex', gap:'24px'}}>
          {['About', 'Skills', 'Projects', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{color:'#9ca3af', textDecoration:'none', fontSize:'0.9rem', transition:'color 0.2s'}}
              onMouseEnter={e => e.target.style.color='white'}
              onMouseLeave={e => e.target.style.color='#9ca3af'}
            >{item}</a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section id="about" style={{minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'0 20px', background:'linear-gradient(135deg, #0f0c29, #302b63, #24243e)'}}>
        <div style={{fontSize:'3rem', marginBottom:'16px'}}>👋</div>
        <h1 style={{fontSize:'3.5rem', fontWeight:800, marginBottom:'16px', lineHeight:1.2}}>
          Hi, I'm <span style={{color:'#a78bfa'}}>Heiligard</span>
        </h1>
        <p style={{fontSize:'1.3rem', color:'#9ca3af', marginBottom:'12px', maxWidth:'600px'}}>
          Full-Stack Developer · React & Node.js · AI Integration
        </p>
        <p style={{fontSize:'1rem', color:'#6b7280', marginBottom:'40px', maxWidth:'500px', lineHeight:1.6}}>
          I build modern web apps and AI-powered tools that help businesses grow. Based in Germany 🇩🇪
        </p>
        <div style={{display:'flex', gap:'16px', flexWrap:'wrap', justifyContent:'center'}}>
          <a href="mailto:your@email.com" style={{background:'linear-gradient(135deg, #7c3aed, #6d28d9)', color:'white', padding:'14px 32px', borderRadius:'50px', textDecoration:'none', fontWeight:600, fontSize:'1rem'}}>
            Hire Me →
          </a>
          <a href="#projects" style={{border:'1px solid rgba(255,255,255,0.2)', color:'white', padding:'14px 32px', borderRadius:'50px', textDecoration:'none', fontWeight:600, fontSize:'1rem', background:'rgba(255,255,255,0.05)'}}>
            View Projects
          </a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{padding:'100px 20px', background:'#0a0a0f'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', textAlign:'center'}}>
          <h2 style={{fontSize:'2.2rem', fontWeight:700, marginBottom:'12px'}}>Skills</h2>
          <p style={{color:'#6b7280', marginBottom:'48px'}}>Technologies I work with</p>
          <div style={{display:'flex', flexWrap:'wrap', gap:'12px', justifyContent:'center'}}>
            {[
              {name:'React', color:'#61dafb'},
              {name:'Node.js', color:'#68a063'},
              {name:'JavaScript', color:'#f7df1e'},
              {name:'REST API', color:'#a78bfa'},
              {name:'CSS', color:'#2965f1'},
              {name:'ChatGPT API', color:'#10b981'},
              {name:'UI/UX', color:'#f472b6'},
              {name:'Git', color:'#f97316'},
              {name:'Vite', color:'#646cff'},
              {name:'Vercel', color:'#ffffff'},
            ].map(skill => (
              <span key={skill.name} style={{background:'rgba(255,255,255,0.05)', border:`1px solid ${skill.color}33`, color:skill.color, padding:'10px 20px', borderRadius:'50px', fontSize:'0.9rem', fontWeight:500}}>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{padding:'100px 20px', background:'linear-gradient(180deg, #0a0a0f, #0f0c29)'}}>
        <div style={{maxWidth:'900px', margin:'0 auto'}}>
          <h2 style={{fontSize:'2.2rem', fontWeight:700, marginBottom:'12px', textAlign:'center'}}>Projects</h2>
          <p style={{color:'#6b7280', marginBottom:'48px', textAlign:'center'}}>Things I've built</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(380px, 1fr))', gap:'24px'}}>

            <div style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'20px', padding:'28px', transition:'transform 0.2s'}}
              onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
            >
              <div style={{fontSize:'2rem', marginBottom:'12px'}}>🤖</div>
              <h3 style={{fontSize:'1.3rem', fontWeight:700, marginBottom:'8px'}}>AI Chatbot</h3>
              <p style={{color:'#9ca3af', marginBottom:'20px', lineHeight:1.6}}>A multi-persona AI assistant powered by Groq AI. Features typing animation, code highlighting, and 4 different assistant modes.</p>
              <div style={{display:'flex', gap:'8px', flexWrap:'wrap', marginBottom:'20px'}}>
                {['React', 'Groq AI', 'CSS'].map(tag => (
                  <span key={tag} style={{background:'rgba(124,58,237,0.2)', color:'#a78bfa', padding:'4px 12px', borderRadius:'20px', fontSize:'0.75rem'}}>{tag}</span>
                ))}
              </div>
              <a href="https://ai-chatbot-flax-zeta.vercel.app" target="_blank" rel="noreferrer" style={{color:'#a78bfa', textDecoration:'none', fontWeight:600}}>View Live →</a>
            </div>

            <div style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'20px', padding:'28px', transition:'transform 0.2s'}}
              onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
            >
              <div style={{fontSize:'2rem', marginBottom:'12px'}}>🌐</div>
              <h3 style={{fontSize:'1.3rem', fontWeight:700, marginBottom:'8px'}}>Portfolio Website</h3>
              <p style={{color:'#9ca3af', marginBottom:'20px', lineHeight:1.6}}>This portfolio site built with React and Vite. Clean design, responsive layout, deployed on Vercel.</p>
              <div style={{display:'flex', gap:'8px', flexWrap:'wrap', marginBottom:'20px'}}>
                {['React', 'Vite', 'CSS'].map(tag => (
                  <span key={tag} style={{background:'rgba(124,58,237,0.2)', color:'#a78bfa', padding:'4px 12px', borderRadius:'20px', fontSize:'0.75rem'}}>{tag}</span>
                ))}
              </div>
              <a href="https://my-portfolio-uc7p.vercel.app" target="_blank" rel="noreferrer" style={{color:'#a78bfa', textDecoration:'none', fontWeight:600}}>View Live →</a>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{padding:'100px 20px', background:'#0a0a0f', textAlign:'center'}}>
        <h2 style={{fontSize:'2.2rem', fontWeight:700, marginBottom:'12px'}}>Let's work together</h2>
        <p style={{color:'#6b7280', marginBottom:'40px', maxWidth:'400px', margin:'0 auto 40px'}}>Available for freelance projects worldwide. Let's build something great!</p>
        <a href="mailto:your@email.com" style={{background:'linear-gradient(135deg, #7c3aed, #6d28d9)', color:'white', padding:'16px 40px', borderRadius:'50px', textDecoration:'none', fontWeight:600, fontSize:'1.1rem'}}>
          Get In Touch →
        </a>
      </section>

    </div>
  )
}

export default App
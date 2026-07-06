import { useApp } from '../context/AppContext'
import clothing from '../assets/clothing.png'
import perfume from '../assets/perfume.png'
import mountain from '../assets/mountain.png'
import fengshui from '../assets/fengshui.png'
import flashcards from '../assets/flashcards.png'
import atshop from '../assets/atshop.png'
import './Projects.css'

const projectData = [
  { tags: ['HTML','CSS','JS'],    img: clothing,    link: 'https://ransurotto89.github.io/clothing_store/' },
  { tags: ['HTML','CSS'],         img: perfume,     link: 'https://ransurotto89.github.io/PERFUME-LINE/' },
  { tags: ['HTML','CSS','JS'],    img: mountain,    link: 'https://ransurotto89.github.io/Mountain/' },
  { tags: ['HTML','CSS','JS'],    img: fengshui,    link: 'https://ransurotto89.github.io/Feng-Shui/' },
  { tags: ['React','JS','CSS'],   img: flashcards,  link: 'https://ransurotto89.github.io/Fullstack-cards/' },
  { tags: ['React','API','CSS'],  img: atshop,      link: 'https://ransurotto89.github.io/at-shop/' },
]

export default function Projects() {
  const { t } = useApp()
  const p = t.projects

  return (
    <main className="projects-page">
      <div className="proj-inner">
        <div className="proj-header">
          <h1 className="proj-title">{p.title}</h1>
          <span className="proj-sub">{p.sub}</span>
        </div>

        <div className="proj-grid">
          {p.items.map((item, i) => (
            <a key={i} href={projectData[i].link} target="_blank" rel="noreferrer" className="proj-card">
              <div className="proj-img-wrap">
                <img src={projectData[i].img} alt={item.title} className="proj-img" />
              </div>
              <div className="proj-body">
                <div className="proj-num">0{i + 1}</div>
                <h2 className="proj-name">{item.title}</h2>
                <p className="proj-desc">{item.desc}</p>
                <div className="proj-tags">
                  {projectData[i].tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
                </div>
                <span className="proj-open">{p.open}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}

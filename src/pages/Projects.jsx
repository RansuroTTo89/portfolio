import { useApp } from '../context/AppContext'
import './Projects.css'

const projectData = [
  { tags: ['HTML','CSS','JS'],       img: '/img/clothing.png',   link: 'https://ransurotto89.github.io/clothing_store/' },
  { tags: ['HTML','CSS'],            img: '/img/perfume.png',    link: 'https://ransurotto89.github.io/PERFUME-LINE/' },
  { tags: ['HTML','CSS','JS'],       img: '/img/mountain.png',   link: 'https://ransurotto89.github.io/Mountain/' },
  { tags: ['HTML','CSS','JS'],       img: '/img/fengshui.png',   link: 'https://ransurotto89.github.io/Feng-Shui/' },
  { tags: ['React','JS','CSS'],      img: '/img/flashcards.png', link: 'https://ransurotto89.github.io/Fullstack-cards/' },
  { tags: ['React','API','CSS'],     img: '/img/atshop.png',     link: 'https://ransurotto89.github.io/at-shop/' },
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

import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import photo from '../assets/photo.jpg'
import './Home.css'

export default function Home() {
  const { t } = useApp()
  const h = t.home

  return (
    <main className="home">
      <div className="home-glow" />
      <div className="home-inner">
        <div className="home-text">
          <h1 className="home-name">
            {h.name}<br />
            <span className="name-light">{h.surname}</span>
          </h1>
          <div className="home-divider" />
          <p className="home-about">
            {h.about[0]}<span className="hl">{h.about[1]}</span>{h.about[2]}<span className="hl">{h.about[3]}</span>{h.about[4]}
          </p>
          <div className="home-pills">
            <span className="pill">⚛️ React</span>
            <span className="pill">⚡ Vite</span>
            <span className="pill">🎨 CSS / SCSS</span>
            <span className="pill">🔀 Git</span>
          </div>
          <div className="home-actions">
            <Link to="/projects" className="btn-lime">{h.btn1}</Link>
            <Link to="/contact" className="btn-ghost">{h.btn2}</Link>
          </div>
        </div>

        <div className="home-photo-wrap">
          <div className="photo-glow" />
          <div className="photo-frame">
            <img src={photo} alt="Abdulkhamid Toshpulatov" className="photo-img" />
          </div>
        </div>
      </div>
    </main>
  )
}

import { NavLink } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import './Navbar.css'

export default function Navbar() {
  const { theme, toggleTheme, lang, setLang, t } = useApp()

  return (
    <nav className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo">AT<span className="dot">.</span></NavLink>

        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nl active' : 'nl'}>{t.nav.home}</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'nl active' : 'nl'}>{t.nav.projects}</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nl active' : 'nl'}>{t.nav.contact}</NavLink>
        </div>

        <div className="nav-controls">
          <div className="lang-switch">
            <button className={lang === 'ru' ? 'lb active' : 'lb'} onClick={() => setLang('ru')}>RU</button>
            <button className={lang === 'en' ? 'lb active' : 'lb'} onClick={() => setLang('en')}>EN</button>
          </div>
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}

import { useApp } from '../context/AppContext'
import './Contact.css'

const contacts = [
  { icon: '✈️', label: 'Telegram', value: '@Ryuuui4',           href: 'https://t.me/Ryuuui4' },
  { icon: '🐙', label: 'GitHub',   value: 'RansuroTTo89',        href: 'https://github.com/RansuroTTo89' },
  { icon: '📧', label: 'Email',    value: 'ttik24107@gmail.com', href: 'mailto:ttik24107@gmail.com' },
]

export default function Contact() {
  const { t } = useApp()
  const c = t.contact

  return (
    <main className="contact-page">
      <div className="ct-inner">
        <div className="ct-header">
          <h1 className="ct-title">{c.title}</h1>
          <p className="ct-sub">{c.sub}</p>
        </div>
        <div className="ct-cards">
          {contacts.map((item, i) => (
            <a key={i} href={item.href} target="_blank" rel="noreferrer" className="ct-card">
              <div className="ct-icon">{item.icon}</div>
              <div className="ct-info">
                <div className="ct-ctype">{item.label}</div>
                <div className="ct-cval">{item.value}</div>
              </div>
              <div className="ct-arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}

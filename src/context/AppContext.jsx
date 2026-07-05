import { createContext, useContext, useState } from 'react'

const T = {
  ru: {
    nav: { home: 'Главная', projects: 'Проекты', contact: 'Контакты' },
    home: {
      name: 'Абдулхамид',
      surname: 'Тошпулатов',
      about: ['Мне ', '20 лет', '. Я Frontend разработчик из Ташкента. Учусь в ', 'Proweb', ' — одной из ведущих IT-школ Узбекистана. Создаю современные, быстрые и красивые сайты на HTML, CSS, JavaScript и React.'],
      btn1: 'Мои проекты →',
      btn2: 'Связаться',
    },
    projects: {
      title: 'Проекты',
      sub: 'Сайты, которые я сделал в процессе обучения в Proweb',
      open: 'Открыть →',
      items: [
        { title: 'Clothing Store',  desc: 'Магазин одежды с навигацией, каталогом товаров и блогом.' },
        { title: 'Perfume Line',    desc: 'Сайт парфюмерного магазина SPIRIT. Чёрно-белый минималистичный дизайн.' },
        { title: 'Mountain',        desc: 'Лендинг туристического сайта с атмосферными горными пейзажами.' },
        { title: 'Feng Shui',       desc: 'Магазин глиняных изделий в стиле Feng Shui. Спокойные тона.' },
        { title: 'Fullstack Cards', desc: 'Интерактивный тренажёр карточек для изучения Frontend, Backend и баз данных.' },
        { title: 'AT Shop',         desc: 'Интернет-магазин с каталогом 194 товаров, сортировкой, скидками и корзиной.' },
      ],
    },
    contact: {
      title: 'Контакты',
      sub: 'Открыт к новым проектам и предложениям о сотрудничестве',
    },
  },
  en: {
    nav: { home: 'Home', projects: 'Projects', contact: 'Contact' },
    home: {
      name: 'Abdulkhamid',
      surname: 'Toshpulatov',
      about: ["I'm ", '20 years old', '. Frontend developer from Tashkent. Studying at ', 'Proweb', " — one of Uzbekistan's top IT schools. I build modern, fast and beautiful websites using HTML, CSS, JavaScript and React."],
      btn1: 'My Projects →',
      btn2: 'Contact Me',
    },
    projects: {
      title: 'Projects',
      sub: 'Websites I built during my studies at Proweb',
      open: 'Open →',
      items: [
        { title: 'Clothing Store',  desc: 'Clothing store with navigation, product catalog and blog.' },
        { title: 'Perfume Line',    desc: 'SPIRIT perfume store website. Black and white minimalist design.' },
        { title: 'Mountain',        desc: 'Tourist landing page with atmospheric mountain scenery.' },
        { title: 'Feng Shui',       desc: 'Clay goods store in Feng Shui style. Calm tones.' },
        { title: 'Fullstack Cards', desc: 'Interactive flashcard trainer for Frontend, Backend and databases.' },
        { title: 'AT Shop',         desc: 'Online store with 194 products, sorting, discounts and cart.' },
      ],
    },
    contact: {
      title: 'Contact',
      sub: 'Open to new projects and collaboration offers',
    },
  },
}

const AppContext = createContext()

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('dark')
  const [lang, setLang]   = useState('ru')

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, setLang, t: T[lang] }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)

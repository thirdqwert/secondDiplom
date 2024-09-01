import { FC } from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header:FC = () => {
  return (
    <>
    <header className={s.header}>
        <div className="container">
            <nav className={s.header__nav}>
                <Link to={'/'} className={s.header__logo}>Logo</Link>
            </nav>
        </div>
    </header>
    </>      
  )
}

export default Header

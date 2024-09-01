import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <h2>Страница не найдена</h2>
    <Link to={'/'}>Назад на главную страницу</Link>
    </>
  )
}

export default NotFound

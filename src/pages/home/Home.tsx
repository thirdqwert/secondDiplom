import { ChangeEvent, FC, useEffect, useState } from 'react';
import Intro from '../../components/intro/Intro'
import ProductsGrid from '../../components/productsGrid/ProductsGrid';
import Header from '../../layouts/header/Header'
import s from './Home.module.scss'
import { workWithLink } from '../../store/getProductsData';
import { useLocation, useNavigate } from 'react-router-dom';
interface IFilterOption {
  id: number;
  text: string;
  value: string;
  order: string;
}
const Home: FC = () => {
  let navigate = useNavigate()
  let location = useLocation()
  let { searchText, setSearchText, sort, setSort, setOrder, order } = workWithLink()
  const [filterWinStatus, setFilterWinStatus] = useState(sort && order ? true : false)
  const [pageCount, setPageCount] = useState(0)
  const [forcePage, setForcePage] = useState(0)
  let filterOption: IFilterOption[] = [
    { id: 1, text: 'Цена по возрастанию', value: 'price', order: 'asc' },
    { id: 2, text: 'Цена по убыванию', value: 'price', order: 'desc' },
    { id: 3, text: 'Количество по возрастанию', value: 'stock', order: 'asc' },
    { id: 4, text: 'Количество по убыванию', value: 'stock', order: 'desc' },
    { id: 5, text: 'Сбросить', value: '', order: '' },
  ]
  const handlePageClick = (event: { selected: number }) => {
    const section = document.getElementById('home');
    section!.scrollIntoView({ behavior: 'instant' })
    setPageCount(event.selected)
    setForcePage(event.selected)
  }

  const searchHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const section = document.getElementById('home');
    section!.scrollIntoView({ behavior: 'instant' })
    setSearchText(event.target.value)
    handlePageClick({ selected: 0 })
  }

  const sortHandle = (item: IFilterOption) => {
    setSort(item.value)
    setOrder(item.order)
    handlePageClick({ selected: 0 })
  }
  useEffect(() => {
    sort && order && setFilterWinStatus(true)
  }, [sort, order])

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    setSort(params.get('sortBy') || '')
    setSearchText(params.get('search') || '')
    setOrder(params.get('order') || '')
  }, [location.search])

  useEffect(() => {
    let params = new URLSearchParams()
    searchText && params.set('search', searchText)
    sort && params.set('sortBy', sort)
    order && params.set('order', order)
    navigate(`?${decodeURIComponent(params.toString())}`)
  }, [sort, searchText])
  let sortByText = filterOption.find((item) => item.value == sort && item.order == order)?.text
  return (
    <>
      <Header />
      <Intro />
      <section className={s.home} id='home'>
        <div className="container">
          <div className={s.home__cnt}>
            <h2 className={s.home__cnt_title}>Продукты</h2>
            <div className={s.home__cnt_search}>
              <input
                placeholder='Поиск'
                type="text"
                value={searchText}
                onChange={(event) => searchHandle(event)}
              />
              <button disabled={!searchText} onClick={() => setSearchText('')}>Очистить</button>
            </div>
            {sort && <p>Сортировка: {sortByText}</p>}
            <button className={s.home__cnt_openWin} onClick={() => setFilterWinStatus(!filterWinStatus)}>
              {filterWinStatus ? 'Закрыть' : 'Фильтр'}
            </button>
            {filterWinStatus && <div className={s.home__cnt_filter}>
              {
                filterOption.map((item) => (
                  <button key={item.id} onClick={() => sortHandle(item)}>{item.text}</button>
                ))
              }
            </div>}
            <ProductsGrid
              pageCount={pageCount}
              handlePageClick={handlePageClick}
              forcePage={forcePage} />
            <button onClick={() => setForcePage(0)}>dsadsad</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

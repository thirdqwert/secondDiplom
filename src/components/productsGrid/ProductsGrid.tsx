import { FC, useState } from 'react'
import s from './ProductsGrid.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/pagination'
import './Pagination.scss'
import { Link } from 'react-router-dom'
import { getProductsData } from '../../store/getProductsData'
import ReactPaginate from 'react-paginate'
import ProductsGridSkeleton from './ProductsGridSkeleton'
interface IProps {
    pageCount: number,
    handlePageClick: (event: any) => void,
    forcePage: number,
}
const ProductsGrid: FC<IProps> = ({ pageCount, handlePageClick, forcePage }) => {
    let { products: data, error, productsAmount } = getProductsData()
    let skeleton = [...new Array(12)].map((_, i) => <ProductsGridSkeleton key={i} />)

    let itemLimit = 12
    let offset = itemLimit * pageCount
    let currentData = data && data.slice(offset, offset + itemLimit)

    if (error) {
        return <h2>ОШИБКА!!! Перзагрузите страницу пожалуйста</h2>
    }
    return (
        <>
            <div className={s.products}>
                <div className={s.products__cnt}>
                    {data ? currentData!.map((item) => (
                        <div className={s.products__cnt_item} key={item.id}>
                            <div className={s.products__cnt_item_images}>
                                <Swiper
                                    className='productGrid__swiper'
                                    loop={true}
                                    modules={[Pagination]}
                                    pagination
                                    slidesPerView={1}
                                    style={{ height: '100%' }}
                                >
                                    {item.images && item.images.map((item, i) => (
                                        <SwiperSlide key={i}>
                                            <img src={item} alt="" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className={s.products__cnt_item_before}>Скидка: <span>{Math.floor(item.discountPercentage)}%</span></div>
                            <div className={s.products__cnt_item_info}>
                                <div className={s.products__cnt_item_title}>Название: <span>{item.title}</span></div>
                                <div className={s.products__cnt_item_text}>Описание: <span>{item.description}</span></div>
                                <div className={s.products__cnt_item_text}>Количество: <span>{item.stock}</span></div>
                                <div className={s.products__cnt_item_text}>Цена: <span>{item.price}$</span></div>
                            </div>
                            <Link to={`/product/${item.id}`} className={s.products__cnt_item_link}>Подробнее</Link>
                        </div>
                    )) : skeleton}
                </div>
            </div>
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={Math.ceil(!isNaN(productsAmount) ? productsAmount / 12 : 0)}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                forcePage={forcePage}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </>
    )
}

export default ProductsGrid

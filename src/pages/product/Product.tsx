import { useNavigate, useParams } from "react-router-dom"
import { getProductsData } from "../../store/getProductsData"
import Header from "../../layouts/header/Header"
import s from './Product.module.scss'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/scss'
import 'swiper/scss/pagination'
import { Pagination } from "swiper/modules"
import { FC } from "react"
import ProductImgSkeleton from "./ProductImgSkeleton"
import ProductInfoSkeleton from "./ProductInfoSkeleton"

const Product: FC = () => {
    const { id } = useParams();
    let itemId = Number(id)

    let { products, error } = getProductsData()
    let navigate = useNavigate()
    if (error) {
        return <h2>ОШИБКА!!! Перзагрузите страницу пожалуйста</h2>
    }
    return (
        <>
            <Header />
            <section className={s.product}>
                <div className="container">
                    {products ? products.map((item) => (
                        itemId == item.id && (
                            <>
                                <div className={s.product__cnt} key={item.id}>
                                    <div className={s.product__cnt_img} >
                                        <Swiper
                                            className='product__swiper'
                                            loop={true}
                                            modules={[Pagination]}
                                            pagination
                                            slidesPerView={1}
                                            style={{ height: '100%' }}
                                        >
                                            {item.images && item.images.map((img, i) => (
                                                <SwiperSlide key={i} style={{ height: '100%' }}>
                                                    <img src={img} alt="" />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                    <div className={s.product__cnt_info}>
                                        <div className={s.product__cnt_info_text}>Название: <span>{item.title}</span></div>
                                        <div className={s.product__cnt_info_text}>Описание: <span>{item.description}</span></div>
                                        <div className={s.product__cnt_info_text}>Брэнд: <span>{item.brand}</span></div>
                                        <div className={s.product__cnt_info_text}>Категория: <span>{item.category}</span></div>
                                        <div className={s.product__cnt_info_text}>Рейтинг: <span>{item.rating}</span></div>
                                        <div className={s.product__cnt_info_text}>Цена: <span>{item.price}$</span></div>
                                        <button>В корзину</button>
                                    </div>
                                </div>
                            </>
                        )
                    )) :
                        <>
                            <div className={s.product__cnt}>
                                <ProductImgSkeleton />
                                <ProductInfoSkeleton />
                            </div>
                        </>}
                    <button className={s.product__back} onClick={() => navigate('/')}>Назад</button>
                </div>
            </section >
        </>
    )
}

export default Product

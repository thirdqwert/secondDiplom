import s from './Intro.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { Link } from 'react-router-dom'
import { FC } from 'react'
import { getIntroData } from '../../api/getProduts';
import { IProducts } from '../../types/types';


const Intro: FC = () => {

  let { data: products, error } = getIntroData()
  if (error) {
    return <h2>ОШИБКА!!! Перзагрузите страницу пожалуйста</h2>
  }
  return (
    <>
      {products && (
        <div className={s.intro}>
          <Swiper
            className='swiper__intro'
            loop={true}
            pagination
            navigation={true}
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            allowTouchMove={false}
          >
            {
              products.map((item:IProducts) => (
                item.images!.length > 1 && (
                  <SwiperSlide key={item.id}>
                    <div className={s.intro__cnt}>
                      <div className={s.intro__cnt_info}>
                        <div className={s.info__text}>Новинка</div>
                        <div className={s.info__text}>Название: <span>{item.title}</span></div>
                        <div className={s.info__text}>Описание: <span>{item.description}</span>
                        </div>
                        <div className={s.info__text}>Категория: <span>{item.category}</span></div>
                        <div className={s.info__text}>Цена: <span>{item.price}$</span></div>
                        <Link className={s.info__btn} to={`/product/${item.id}`}>Подробнее</Link>
                      </div>
                      <div className={s.intro__cnt_images}>
                        <Swiper
                          className='swiper__intro_img'
                          loop={true}
                          pagination={{
                            clickable: true,
                          }
                          }
                          modules={[Pagination]}
                          spaceBetween={20}
                          slidesPerView={1}
                          style={{ height: '100%' }}
                        >
                          {item.images && item.images.map((item, i) => (
                            <SwiperSlide key={i} style={{ height: '100%', }}>
                              <img src={item} alt="" />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              ))
            }
          </Swiper>
        </div>
      )}
    </>
  )
}

export default Intro

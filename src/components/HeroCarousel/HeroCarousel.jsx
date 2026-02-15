import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroCarousel.css';

// Import images
import img1 from '../../assets/c-1.jpg';
import img2 from '../../assets/c-2.jpg';
import img3 from '../../assets/c-3.jpg';
import img4 from '../../assets/v-1.jpg'; // Using another image for variety

const heroImages = [img1, img2, img3, img4];

const HeroCarousel = ({ children }) => {
    return (
        <div className="hero-carousel-wrapper">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="slide"
                speed={1000}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="hero-swiper"
            >
                {heroImages.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="hero-slide-bg"
                            style={{ backgroundImage: `url(${img})` }}
                        />
                        <div className="hero-overlay"></div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="hero-content-layer">
                {children}
            </div>
        </div>
    );
};

export default HeroCarousel;

import React, { useState, useEffect, useCallback } from 'react';

interface CarouselSlide {
    image: string;
    thumbnail: string;
    description: string;
}

interface CarouselProps {
    slides: CarouselSlide[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
    className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
    slides,
    autoPlay = true,
    autoPlayInterval = 25000,
    className = ''
}) => {
    const [current, setCurrent] = useState(0);
    const total = slides.length;

    const showSlide = useCallback((index: number) => {
        setCurrent(index);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % total);
    }, [total]);

    const prevSlide = useCallback(() => {
        setCurrent((prev) => (prev - 1 + total) % total);
    }, [total]);

    useEffect(() => {
        if (!autoPlay || total <= 1) return;

        const interval = setInterval(nextSlide, autoPlayInterval);
        return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, nextSlide, total]);

    if (!slides.length) return null;

    return (
        <div className={`carousel ${className}`}>
            <button className="carousel-btn prev" onClick={prevSlide}>
                ❮
            </button>
            <button className="carousel-btn next" onClick={nextSlide}>
                ❯
            </button>

            <div className="carousel-thumbnails">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.thumbnail}
                        data-index={index}
                        className={current === index ? 'active-thumb' : ''}
                        onClick={() => showSlide(index)}
                        alt={`Thumbnail ${index + 1}`}
                    />
                ))}
            </div>

            <div className="carousel-track">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide fade ${current === index ? 'active' : ''}`}
                    >
                        <img src={slide.image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;

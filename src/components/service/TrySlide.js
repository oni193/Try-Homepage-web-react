import React, { useState, useEffect, useRef } from 'react';
import Slide from './SlideComponent';
import img1 from '../../assets/slide1.jpeg';
import img2 from '../../assets/slide2.jpg';
import img3 from '../../assets/slide3.jpg';
//캐러셀에 들어갈 이미지들 import

const containerStyle = {
    width: '900px',
    height: 'auto',
    overflow: 'hidden'  // 선 넘어간 이미지들은 보이지 않도록 처리
}; 

const buttonStyle = {
    all: 'unset',
    border: '1px solid coral',
    padding: '0.5em 2em',
    color: 'coral',
    borderRadius: '10px',
};

const sliderContainer = {
    display: 'flex',
};

const TOTAL_SLIDES = 2;
//전체 슬라이드 개수 지정 배열처럼 0부터 시작

export default function Slider () {
    const [currentSlide, setCurrentSlide ] = useState(0);
    // useState를 통해 어떤 슬라이드를 보여주고 있는지 정함
    const slideRef = useRef(null);


    // nextSlide와 prevSlide를 통해 현재 보여주는 슬라이드 결정
    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
            setCurrentSlide(0);
          } else {
            setCurrentSlide(currentSlide + 1);
          }
        };
        const prevSlide = () => {
          if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES);
          } else {
            setCurrentSlide(currentSlide - 1);
          }
        };

        useEffect(() => {
            slideRef.current.style.transition = "all 0.5s ease-in-out";
            //useRef를 통해 Slider의 정보 보여줄 수 있도록 함.
            slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
          }, [currentSlide]);
          
        return (
            <div className="Container" style={containerStyle}>
              <div className="SliderContainer" ref={slideRef} style={sliderContainer}>
                <Slide img={img1} />
                <Slide img={img2} />
                <Slide img={img3} />
              </div>
              <button style={buttonStyle} onClick={prevSlide}>Previous Slide</button>
              <button style={buttonStyle} onClick={nextSlide}>Next Slide</button>
            </div>
          );
        };
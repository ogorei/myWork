import React from 'react';
import Skills from '../components/Skills';
import Hero from '../components/Hero';
import TransitionCard from '../components/transition';

function About(props){ 

    return ( 
      <div>
        <Hero title={props.title} />
        <Skills
          heading="Reina N. Suzuki"
          content="多摩美術大学卒業後、学校法人トラベルジャーナル学園に入社。
          英語教員だけでなく、日本学生の留学支援、留学アドバイザーも務める。
          約8年勤務後、インターネット分野を独学で勉強し始め、JavaScriptをベースにしたウエブデザイナーを目指す。
          2020年12月にはCIW(JavaScript Specialist)認定資格を取得するなど、日々、ネット言語技術の習得に向け、尽力中。"
        />
        <TransitionCard />
      </div>
    )};
  

export default About;

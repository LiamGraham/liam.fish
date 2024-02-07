import randomColor from 'randomcolor';
import React, { useEffect, useState } from 'react';
import { ColorLink } from './ColorLink.js';
import { BubbleText } from './BubbleText.js';
import { FlexLine } from './FlexLine.js';
import { HoverText } from './HoverText.js';
import { HoverImage } from './HoverImage.js';
import hoverImage from './images/me.jpeg'

const COLOUR_CHANGE_INTERVAL = 500;

export function App() {
  const [style, setStyle] = useState({ color: "black" });
  useEffect(() => {
    const timer = setTimeout(() => {
      setStyle({ color: randomColor() });
    }, COLOUR_CHANGE_INTERVAL)
    return () => clearTimeout(timer);
  });

  return (
    <main>
        <h1>Hi, I'm
          <HoverImage image={hoverImage}>
            <span id="name"> Liam.</span>
          </HoverImage>
        </h1>
      <p className='bio'>
        I'm a software engineer based in Naarm / Melbourne. I graduated from the University of Queensland  
        in 2020 with a Bachelor of Engineering (Honours Class I). I'm currently working as
        a Principal Platform Engineer at <ColorLink href='https://www.worksafe.qld.gov.au/' newTab reset>WorkCover Queensland</ColorLink>. Here's 
        my <ColorLink href='https://github.com/liamgraham' newTab reset>GitHub</ColorLink> and <ColorLink href='https://www.linkedin.com/in/liam-graham/' newTab reset>LinkedIn</ColorLink>.
        I also make music as <ColorLink href='https://soundcloud.com/theyalright/popular-tracks' newTab reset>Theyalright</ColorLink>.
        {/* <CycleText interval={250}>⅋☞☆☉☂♫✼✎</CycleText> */}  
      </p>
      <section className='experience'>
        <HoverText text='Principal Platform Engineer'>
          <div className='role'>
            <BubbleText>2023 — 2024</BubbleText><FlexLine/><div className='role-text'>WorkCover Queensland</div>
          </div>
        </HoverText>
        <HoverText text='Backend Engineer'>
          <div className='role'>
            <BubbleText>2022 — 2023</BubbleText><FlexLine/><div className='role-text'>Propel Health AI</div>
          </div>
        </HoverText>
        <HoverText text='Software Engineer'>
          <div className='role'>
            <BubbleText>2022 — 2022</BubbleText><FlexLine/><div className='role-text'>Department of Communities, Housing and Digital Economy</div>
          </div>
        </HoverText>
      </section>
    </main>
  );
}

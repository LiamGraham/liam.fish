import randomColor from 'randomcolor';
import { useEffect, useState } from 'react';
import { ColorLink } from './ColorLink.js';

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
      <h1>Hi, I'm <span id="name" className="color-change-text">Liam.</span></h1>

      <p className='bio'>
        I'm a software engineer based in Naarm / Melbourne. I graduated from the University of Queensland  
        in 2020 with a Bachelor of Engineering (Honours Class I). I'm currently working as
        a Principal Platform Engineer at <ColorLink href='https://www.worksafe.qld.gov.au/' mode='cycle'>WorkCover Queensland</ColorLink>. Here's 
        my <ColorLink href='https://github.com/liamgraham'>GitHub</ColorLink> and <ColorLink href='https://www.linkedin.com/in/liam-graham/'>LinkedIn</ColorLink>.
        I also make music as <ColorLink href='https://soundcloud.com/theyalright/popular-tracks'>Theyalright</ColorLink>. 
      </p>
    </main>
  );
}

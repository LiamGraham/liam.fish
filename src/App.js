import randomColor from 'randomcolor';
import { useEffect, useState } from 'react';
import { ColourLink } from './ColourLink.js';

const COLOUR_CHANGE_INTERVAL = 500;

export function App() {
  const [style, setStyle] = useState({ color: "black" });
  useEffect(() => {
    setTimeout(() => {
      setStyle({ color: randomColor() });
    }, COLOUR_CHANGE_INTERVAL)
  });

  return (
    <main>
      <h1>Hi, I'm <span id="name" style={style}>Liam.</span></h1>

      <p className='bio'>
        I'm a software engineer. I graduated from the University of Queensland  
        in 2020 with a Bachelor of Engineering (Honours Class I). I'm currently working as
        a Graduate Software Engineer at the <ColourLink href='https://www.chde.qld.gov.au/'>Department 
        of Communities, Housing and Digital Economy</ColourLink>. Here's 
        my <ColourLink href='https://github.com/liamgraham'>GitHub</ColourLink> and <ColourLink href='https://www.linkedin.com/in/liam-graham/'>LinkedIn</ColourLink>.
      </p>
      <p className='bio'>
        I also make music as <ColourLink href='https://theyalright.com'>Theyalright</ColourLink>. 
      </p>
    </main>
  );
}

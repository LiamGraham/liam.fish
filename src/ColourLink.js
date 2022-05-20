import randomColor from 'randomcolor';
import { useEffect, useState } from 'react'

const DEFAULT_STYLE = { color: 'inherit' }

export function ColourLink(props) {
  const [active, setActive] = useState(false);
  const [style, setStyle] = useState({color: 'inherit'});

  useEffect(() => {
    if (active) {
      setStyle({color: randomColor()});
    }
  }, [active]);

  return (
    <a
      href={props.href}
      onMouseOut={() => setActive(false)}
      onMouseOver={() => setActive(true)}
      style={style}
    >
      {props.children}
    </a>
  )
}

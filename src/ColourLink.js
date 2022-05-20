import randomColor from 'randomcolor';
import { useEffect, useState } from 'react'

const DEFAULT_STYLE = { color: 'inherit' }

export function ColourLink(props) {
  const [active, setActive] = useState(false);
  const [style, setStyle] = useState(DEFAULT_STYLE);

  useEffect(() => {
    if (active) {
      setStyle({color: randomColor()});
    } else if (props.reset) {
      setStyle(DEFAULT_STYLE)
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

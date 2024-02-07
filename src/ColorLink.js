import randomColor from 'randomcolor';
import { useEffect, useState } from 'react'

const DEFAULT_STYLE = 'inherit'; 

export function ColorLink(props) {
  const {href, reset, newTab} = props;
  const [active, setActive] = useState(false);
  const [color, setColor] = useState(DEFAULT_STYLE);

  useEffect(() => {
    if (active) {
      setColor(randomColor());
    } else if (reset) {
      setColor(DEFAULT_STYLE)
    }
  }, [active]);

  return (
    <a
      href={href}
      onMouseOut={() => setActive(false)}
      onMouseOver={() => setActive(true)}
      style={{color}}
      target={newTab ? '_blank' : '_self'}
    >
      {props.children}
    </a>
  )
}

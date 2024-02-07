import randomColor from 'randomcolor';
import React, { useEffect, useState } from 'react'

const DEFAULT_STYLE = 'inherit';
const DEFAULT_STATIC_COLOR = 'blue'

export function ColorLink(props) {
  const {href, reset, newTab, mode} = props;
  const [active, setActive] = useState(false);
  const [color, setColor] = useState(DEFAULT_STYLE);

  useEffect(() => {
    if (active) {
      if (mode === 'random') {
        setColor(randomColor());
      } else {
        setColor(DEFAULT_STATIC_COLOR);
      }
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

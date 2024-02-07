import React, { useEffect, useState } from 'react'

export function CycleText(props) {
  const {interval} = props;
  const [text, setText] = useState(props.children)

  useEffect(() => {
    const timer = setTimeout(() => {
      newText = text.slice(1) + text[0];
      setText(newText)
    }, interval)
    return () => clearTimeout(timer);
  });

  return (
    <span>
      {text}
    </span>
  )
}

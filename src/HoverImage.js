import React, { useState, useRef } from 'react';

export function HoverImage(props) {
  const {image} = props;
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const hoverRef = useRef(null);

  const handleMouseMove = (e) => {
    if (hoverRef.current && hoverRef.current.contains(e.target)) {
      setCursorPos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <span
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='hover-image-block'
      ref={hoverRef}
    >
      {props.children}
      {isHovering && (
        <img
          src={image}
          className='hover-image'
          style={{
            position: 'absolute',
            left: cursorPos.x,
            top: cursorPos.y,
            pointerEvents: 'none'
          }}
        />
      )}
    </span>
  );
};

import React, { useState } from 'react';

export function HoverText(props) {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setTooltip({
      visible: true,
      x: e.clientX,
      y: e.clientY
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      className='hover-text-block'
    >
      {props.children}
      {tooltip.visible && (
        <div className='hover-text'
          style={{ 
            left: `${tooltip.x}px`, 
            top: `${tooltip.y}px`,
            fontFamily: props.fontFamily,
          }}
        >
          {props.text}
        </div>
      )}
    </div>
  );
};

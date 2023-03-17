import React, { useState } from 'react'
import { ChromePicker, ColorResult } from 'react-color';

type Props = {
  children: React.ReactNode;
};

export default function background({ children }: Props) {
  const [bgColour, setBgColour] = useState('#ffffff');

  //test
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleChange = (color: ColorResult) => {
    setBgColour(color.hex);
  };
  console.log(bgColour);
  return (
    <div style={{ backgroundColor: bgColour }}>
      <button onClick={() => {
        console.log('Button clicked');
        setShowColorPicker(!showColorPicker);
      }}>
        Pick a color
      </button>
      {showColorPicker && <ChromePicker color={bgColour} onChange={handleChange} />}
      <div>{children}</div>
    </div>
  )
}

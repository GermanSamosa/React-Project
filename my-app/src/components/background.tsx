import React, { useState } from 'react'
import { ChromePicker, ColorResult } from 'react-color';

type Props = {
  children: React.ReactNode;
};

export default function background({ children }: Props) {
  const [bgColour, setBgColour] = useState('#0000');

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
        Mine ruin the look of the page, but you can change the background color here :)
      </button>
      {showColorPicker && <ChromePicker color={bgColour} onChange={handleChange} />}
      <div>{children}</div>
    </div>
  )
}

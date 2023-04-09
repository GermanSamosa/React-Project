import React from 'react';

interface ScrollButtonsProps {}

const ScrollButtons: React.FC<ScrollButtonsProps> = () => {
  const handleButtonClick = (section: string) => {
    // Scroll to the selected section
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('section1')}>
        Projects
      </button>
      <button onClick={() => handleButtonClick('section2')}>
        Skillsets
      </button>
      <button onClick={() => handleButtonClick('section3')}>
        About
      </button>
    </div>
  );
};

export default ScrollButtons;
import React, { useState, createContext } from "react";

const SliderContext = createContext("closed");

const SliderProvider = (props) => {
  const [slider, setSlider] = useState("closed");

  return (
    <SliderContext.Provider value={{ slider, setSlider }}>
      {props.children}
    </SliderContext.Provider>
  );
};

export default SliderContext;

export { SliderProvider };

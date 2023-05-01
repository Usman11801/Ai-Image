import React, { useState } from "react";
import { Slider } from "antd";

const marks = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
};

const SliderComponent = () => {
  const [value, setValue] = useState(1);

  const handleChange = (newValue) => {
    // Only allow the slider to select values 1, 2, 3, and 4
    if (newValue === 1 || newValue === 2 || newValue === 3 || newValue === 4) {
      setValue(newValue);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "90%" }}>
        <Slider
          min={1}
          max={4}
          marks={marks}
          value={value}
          onChange={handleChange}
          onAfterChange={handleChange}
          dotStyle={{
            border: "none",
          }}
          activeDotStyle={{
            border: "none",
            color: "blue",
          }}
        />
      </div>
    </div>
  );
};

export default SliderComponent;

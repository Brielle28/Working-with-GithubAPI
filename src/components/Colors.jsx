import React, {useState} from "react";

const Colors = () => {
    // setting our useState
    const [SelectedColor, setSelectedColor] = useState("gray")
    
    // creating a function that sets the value to to the SelectedColor
    const changeSelectedColor = (event) =>{
        setSelectedColor(event.target.value)
    }
    return (
    <>
    <div className="bg-gray-600 flex h-screen w-full items-center justify-center"
    style={{ backgroundColor: SelectedColor }}    //setting the background to the SelectedColor
    >
        {/* using the onChangehere to connect the changeSelectedColor function */}
      <select className="select "
      onChange={changeSelectedColor}>     
        <option disabled selected>
          Pick your favorite color
        </option>
        <option value="yellow">yellow</option>
        <option value="blue">blue</option>
        <option value="red"> Red</option>
        <option value="green">green</option>
        <option value="purple">purple</option>
      </select>
    </div>
    </>
  );
};

export default Colors;

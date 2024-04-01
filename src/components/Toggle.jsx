// MAKING A TEXT VISIBLE AND NOT VISIBLE ANYTHING THE BUTTON IS CLICKED


import React, { useState } from 'react';
const Toggle = () => {
    const [isdisplay, setisdisplay] = useState(true);

    // using onclick event handler

    function buttonToggle() {
        setisdisplay(!isdisplay); 
    }

    return (
        <>
            <div className='flex flex-col bg-purple-800 items-center justify-center gap-[20px] h-screen w-full'>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={buttonToggle}>TOGGLE ON/OFF</button>
                <div style={{ display: isdisplay ? "flex" : "none" }}>
                    <h1 className="text-white text-[20px]">
                        The Toggle button when clicked hides this text and when clicked again displays this text
                    </h1>
                    <h2 className='text-white text-center text-[20px]'>
                        Try it!
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Toggle;

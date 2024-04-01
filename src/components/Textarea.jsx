// cCOUTING THE WORDS BEEN TYPED IN A COMMENT AREA
import React, { useState } from 'react';

const Textarea = () => {
    const [count, setCount] = useState(0);

    const countCharacters = (event) => {
        setCount(event.target.value.length);
    };

    return (
        <div className='flex flex-col items-center justify-center w-full h-screen bg-orange-700 gap-4'>
            <textarea className="textarea textarea-primary h-[250px] w-[250px]" placeholder="Bio" onChange={countCharacters}></textarea>
            <p className='text-white text-2xl font-serif mr-4'> CHARACTER COUNT: {count} </p>
        </div>
    );
}

export default Textarea;

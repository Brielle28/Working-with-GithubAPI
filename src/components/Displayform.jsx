//  DISPLAYING WHAT IS BEEN TYPED IN AN INPUT FIELD 

import React, {useState} from 'react'
const Displayform = () => {
    const [form, setform] = useState("")

    // using onchange event handler

    function Display (event) {
        setform(event.target.value)
    }

  return (
    <>
      <div className='w-full h-screen flex flex-col items-center justify-center gap-4 bg-slate-900'>
      <input type="text" value={form} onChange={Display} className="input input-bordered w-full max-w-xs" />
      <h4 className='text-white'> DISPLAY : {form}</h4>
      </div>
    </>
  )
}

export default Displayform

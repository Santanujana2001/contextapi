import React, { createContext, useState } from 'react'
import Two from './two'
// starting
// createContext() for creating the context environment
export const Contextapp = createContext();

function One() {
    const [first, setfirst] = useState(0);
      // passing by making an object
    const oneval ={
        firstval:setfirst
    }
  return (
    
    <div>
     {/* provider and value can not be modified as it is a built-in property */}
    {/* using the values in three.js */}
    <Contextapp.Provider value={oneval}>
     i am 1 {first}
    <Two />
    </Contextapp.Provider>
    </div>
  )
}

export default One
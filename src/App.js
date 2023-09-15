import React, { createContext } from 'react';
import One from './one';

// starting
// createContext() for creating the context environment
export const B = createContext();

function App() {
  const a = "sanu";
  const b = "utsab";

  // passing by making an object
  const value = {name1:a,name2:b}

  return (
    <>
    {/* provider and value can not be modified as it is a built-in property */}
    {/* using the values in three.js */}
    <B.Provider value={value}>
    <One/>
    </B.Provider>
    </>
  );
}

export default App;

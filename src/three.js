import React, { useContext } from 'react'
import { B } from './App'
import { Contextapp } from './one';

function Three() {
    // we need to write useContext() inorder to use the value of the parent
    // this is form app.js
    const data = useContext(B);
    // this is form one.js
    const thval= useContext(Contextapp)
  return (
    <div>
    hi i am 3 {data?.name1} and {data?.name2}
    <button onClick={()=>thval.firstval(x=>x+1)}>+</button>
    </div>
  )
}

export default Three
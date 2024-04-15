import React, { useState } from 'react'
import Test from "./Test";

export const App = () => {
  const[data,setData]=useState({
    stdName:"harsha",
    stdAge:22,
    stdLoc:"hyderabad",
  })
  const{stdName,stdAge,stdLoc}=data;
  return (
    <div>
      <center>
        <h1>Student Details</h1>
        <Test names={data.stdName} age={data.stdAge} loc={data.stdLoc}/>
      </center>
    </div>
  )
}
export default App
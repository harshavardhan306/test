import React from 'react'

 const Test = (props) => {
  return (
    <div>
        <center>
            <h2>my name is:{props.names}</h2>
            <h3>my age is :{props.age}</h3>
            <h4>location is:{props.loc}</h4>
        </center>
    </div>
  )
}
export default Test
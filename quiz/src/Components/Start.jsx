import { useRef } from "react"

const Start = ({setUsername}) => {
    const inputRef= useRef();

    const handleClick=()=>{
         inputRef.current.value && setUsername(inputRef.current.value)

    }

  return (
    <div className="start">
        <input  className="startInput" placeholder="Enter your name" ref={inputRef}
         />
        <button onClick={handleClick} className="startbtn">Start</button>
      
    </div>
  )
}

export default Start

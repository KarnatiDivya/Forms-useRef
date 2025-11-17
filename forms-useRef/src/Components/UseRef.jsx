import React,{useRef} from "react"
export function UseRef(){
    const inputref=useRef(null)
    const handleform=()=>{
        inputref.current.focus();
    }
    return(
        <>
        <input type="text" ref={inputref}></input><br /><br />
        <button onClick={handleform}>Click Here</button>
        </>
    )
}
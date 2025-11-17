import React,{useRef} from"react";
export function UnControlledform(){
    const inputref=useRef(null)

    const handleform=(e)=>{
       e.preventDefault();
        alert(`Hello,${inputref.current.value}`)
    }
    return(
        <form onSubmit={handleform}>
            <input type="text" ref={inputref}/><br /><br />
            <button type="submit">Click Here</button>

        </form>
    )
}


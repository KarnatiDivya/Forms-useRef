import { useState } from "react"

export function Controlledform(){
    const[name,setName]=useState("")
    const handleform=(e)=>{
        e.preventDefault();
        alert(`Hello,${name}`)
    }
    return(
        <form onSubmit={handleform}>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /><br /><br />
            <button>Submit</button>

        </form>
    )
}
import { Controlledform } from "./Components/Controlledform"
import { UnControlledform } from "./Components/UnControlledform"
import { UseRef } from "./Components/UseRef"

function App() {
  

  return (
   <>
   <h1>useRef Hooks</h1>
   <UseRef />
   <h1>Controlled Components in React</h1>
   <Controlledform />
   <h1>UnControlled components in React</h1>
   <UnControlledform />
   
   </>
  )
}

export default App

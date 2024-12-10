
import { useState } from 'react';
import './App.css'

function App() {
  const [val,setVal] = useState("");
function redirect(){
    window.location.href = "http://localhost:5174/"+val;
}
  return (
    <>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
      <button onClick={()=>redirect()}>Redirect from here.....</button>
    </>
  )
}

export default App

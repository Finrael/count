import { useState } from "react"

/*
Implement a react component (it can be simple, can have it's own state) that has a button,
 which toggles the visibility of a paragraph, which displays some text. "Hello" for example. 
 By default the greeting is hidden and clicking on the button, it gets visible. When clicking on it again, gets hidden.
*/
const WM8 = ()=>{
    const [show, setShow]=useState(true)
    const executeFunction=()=>{
        setShow(!show)
    }
    return(
        <>
        <input type="button" value ="show" onClick={executeFunction}/>{show && <p>HELLO</p>}
        </>
    )
}
export default WM8
import { useState } from "react";
const data =[
    {
        id:1,
        name:'a',
        body:'body a',
    },
    {
        id:2,
        name:'b',
        body:'body b',
    }
    , {
        id:3,
        name:'c',
        body:'body c',
    }
]
const Accordion = ()=>{
    const [accordionIndex, setAccordionIndex] = useState(-1);
    const setLetter=(e)=>{
        switch(e.target.value){
            case 'a':
                setAccordionIndex(0)
                break;
                case 'b':
                setAccordionIndex(1)
                break;
                case 'c':
                setAccordionIndex(2)
                break;
            default:
                setAccordionIndex(-1)
                break;
        }
    }

    const executeFunction=()=>{}
    return(
        <div>
        <input type="button" value ="show" onClick={executeFunction}/>
        {data.map((element)=>(<input type='button' value={element.name} key={element.id} onClick={setLetter}/> ))}
        {data[accordionIndex]&& <p>{data[accordionIndex].body}</p>}
        </div>
    )
}
export default Accordion
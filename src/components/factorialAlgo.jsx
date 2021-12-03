import React, { useState } from 'react';
const FactorialAlgo = ()=>{
const [ factorial, setFactorial] = useState(0);
const factorialFunction = (number)=>{
    return number < 2?1:number *factorialFunction(number-1)
}
const callFactorial= (e)=>{
    setFactorial(factorialFunction(e.target.value));

}

    return(
        <div>
            <input type="text" onClick={callFactorial}/>
            <p>Value of factorial is {factorial}</p>
        </div>
    )
}
export default FactorialAlgo;
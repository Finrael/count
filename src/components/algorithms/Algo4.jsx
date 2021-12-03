import React from 'react';
//Merge two sorted arrays where one has enough space at the end for the other (A6)
const Algo4 = ()=>{
    const concatArray = ()=>{
        
const largeArray = [1,3,5,7,9].concat(new Array(5));
const smallArray = [0,2,4,6,8];
const mergedArray=largeArray.concat(smallArray)
const solutionArray=mergedArray.filter((element)=>typeof element =="number")
console.log(solutionArray.sort())
    }
    return(
        <div>
            <input type='button' value="Concat Arrays" onClick={concatArray}/>
        </div>
    )
}
export default Algo4;
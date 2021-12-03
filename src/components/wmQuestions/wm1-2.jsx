import React from 'react';
// 1) Write a function that determines if a string of brackets is balanced or not:
const WM1 = ()=>{

const var1='{[([({))]}}';
const var2 = '{[()]}';
 const balance=(str)=>{
 const map ={
     '{':'}',
     '[':']',
     '(':')'
 }
 const stack = [];
 for (const element of str){
     if (map[element]){
        stack.push(element)
        continue
     }
     const popped = stack.pop();
     if(map[element]===popped){
        return false
     }
 }
 return stack.length===0
       
 }
    
    

 
    const activateAlgo = ()=>{
        console.log(balance(var1));
        console.log(balance(var2));
         }
    return(
        <div>
            <input type='button' value="Balance redux" onClick={activateAlgo}/>
        </div>
    )
}
export default WM1;
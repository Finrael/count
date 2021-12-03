import React from 'react';
//Find the largest run of at most two distinct numbers 
const Algo7 = ()=>{
    const longestRunOfTwoNumbers = (input)=>{
        const convertedArr = input.toString().split('');
        console.log(convertedArr);
        const auxArr = [];
        const resultArr =[];
        for (let i = 0 ; i<convertedArr.length ; i++ ){
            if(!auxArr.includes(convertedArr[i]) && auxArr.length<2){
            auxArr.push(convertedArr[i]);
        }
    }
    for (let i = 0 ; i<convertedArr.length ; i++ ){
        if(auxArr.includes(convertedArr[i])){
        resultArr.push(convertedArr[i]);
    }else{
        break;
    }
}
    
    return parseInt( resultArr.join(''));
}
 
    const activateAlgo = ()=>{
        /**
* Example 1:
*  Input 1212223311212223
*  Output 1121222
*
* Example 2:
*  Input 111
*  Output 111
*/
console.log(longestRunOfTwoNumbers(1212223311212223))


    }
    return(
        <div>
            <input type='button' value="Run of characters" onClick={activateAlgo}/>
        </div>
    )
}
export default Algo7;
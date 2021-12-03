import React from 'react';
//In an array, i.e [2,4,8,7,5]
//find the first two numbers that sums to a certain number. i.e. 9.  
const WM2 = ()=>{
    function findTwo(array, sum) {
      let map={}
      for (let i =0 ; i<array.length;i++){
        const missing = sum - array[i]
        if (map[missing]!==undefined){
          return [missing,array[i]]
        }
        if(map[array[i]] ===undefined){
          map[array[i]] = 0
        }
      }
      return []
      }
 
    const activateAlgo = ()=>{
        console.log(findTwo([2,4,8,7,5], 15))
         }
    return(
        <div>
            <input type='button' value="sum to number" onClick={activateAlgo}/>
        </div>
    )
}
export default WM2;
import React from 'react';
//Write a function that will reverse N sized blocks of an array.
const Algo5 = ()=>{
    const arr = [0,1,2,3,4,5,6,7,8,9];
        const blockSize = 3;
    const reverseBlocks=(arr, size)=>{
        let k=arr.length;
        for (let i =0;i<k;i+=size){
            let left = i;
            let right = Math.min(i+ size -1, k-1);
            let temp;
            while (left < right)
        {
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left += 1;
            right -= 1;
        }
        }
        return arr;
    }
    const reverseArray = ()=>{
        
       console.log( reverseBlocks(arr, blockSize));
        /**
        * Expected result:
        * [2,1,0,5,4,3,8,7,6,9]
        */
        
    }
    return(
        <div>
            <input type='button' value="Reverse Array Parts" onClick={reverseArray}/>
        </div>
    )
}
export default Algo5;
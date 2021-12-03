import React from 'react';
/*

Given a list of clothing sizes, create a function that will find top two most popular sizes in a list. 

E.g. 

const list = ["XS", "M", "L", "5XL", "XL", "M", "2X", "L", "S", "M", "6X", "M"] 

findTop2(list) 

returns: [“M”, “L”] 

*/
const WM3 = ()=>{
    function findPopular(array) {
        const map={}
        let top=array[0];
        let top2 = array[0];
        for (const element of array){
            if(map[element]===undefined){
            map[element] =1
            }else{
                map[element] = map[element]+1
            }
           if(element !==top){
               if(map[element]>map[top]){
                   top2=top;
                   top=element;
               }else if (top===top2 || (element !==top2 && map[element]>map[top2])){
                   top2=element;
               }
           }
        }

        return [top, top2]

      }
 
    const activateAlgo = ()=>{
        console.log(findPopular(["XS", "M", "L", "5XL", "XL", "M", "2X", "L", "S", "M", "6X", "M"] ))
        //returns: [“M”, “L”] 
         }
    return(
        <div>
            <input type='button' value="clothing sizes" onClick={activateAlgo}/>
        </div>
    )
}
export default WM3;
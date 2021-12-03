import React from 'react';
//Create a pool of N running tasks from an M sized list. Notify when all tasks are done
const Promise1 =()=>{
    const taskFactorySample = (delay,resolve,val)=>{
        return new Promise((res,rej)=>setTimeout(resolve?res:rej,delay,val));
    }
    

        const tasks=[
            {delay:500, resolve:true, val:1},
            {delay:1000, resolve:true, val:2},
            {delay:5000, resolve:false, val:'error'},
            {delay:2000, resolve:true, val:4},
            {delay:1000, resolve:false, val:'error'},
            {delay:1000, resolve:false, val:'error'},
        ];
        const pool_size=2;

        const runBatches = ()=>{
            tasks.map((element)=>{
               taskFactorySample(element.delay,element.resolve,element.val);
            })
        }

    return(
        <input value="Promise1" type="button" onClick={runBatches}/>
    )
}
export default Promise1;
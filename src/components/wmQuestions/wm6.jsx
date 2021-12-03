/*
1) Given an 2 dimensional array, create two functions next and hasNext that works as follows:

For the array [1,2,3] calling next for the first time will return 1, then 2, then 3 and every call after that will return undefined 
and calling hasNext will return true the first and second time it is called and false the third and subsequent times it is called.
*/
class CustomArray extends Array{
    constructor(...args){
        super(...args)
        this.index=0
    }
    next(){return this.index<this.length?this.index++: undefined}
    hasNext(){return this.index<this.length}
}

const WM6 = ()=>{

    const executeFunction=()=>{
    const arr = new CustomArray([1,2,3])
   console.log( arr.hasNext())
    }
    return(
        <>
        <input type="button" value ="next" onClick={executeFunction}/>
        </>
    )
}
export default WM6
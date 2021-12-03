const WM9 = ()=>{
    const executeFunction=()=>{
        for(let i=0; i<5; i++){
            setTimeout(() => {
                console.log(i);
            }, i*1000)
        }
        
    }
    let arr=[]
    const flatten= ( input)=>{
        input.forEach (e=>{
            if (Array.isArray(e)){
                flatten(e)
            }else{
                arr.push(e)
            }
        })
    }
    const executeFunction2=()=>{
        flatten([null, [1,2,3], [4],[5],[6,[7.[1]]]])
        console.log(arr)
    }
    return(
        <>
        <input type="button" value ="settimeout" onClick={executeFunction}/>
        <input type="button" value ="flatten" onClick={executeFunction2}/>
        </>
    )
}
export default WM9
const WM4 = ()=>{
    var x = 21
var girl = function(){
    console.log(x);
    var x = 20
}

    const executeFunction=()=>{
        girl()
    }
    return(
        <>
        <input type="button" value ="girl" onClick={executeFunction}/>
        </>
    )
}
export default WM4
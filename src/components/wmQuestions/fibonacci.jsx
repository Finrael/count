const Fibonacci = ()=>{
    const fibonacci = (num)=>{
        let n1 = 0;
        let n2 = 1;
        let nextTerm=0;
        for (let i = 0 ; i<num;i++){
            console.log(n1)
            nextTerm = n1 +n2;
            n1=n2;
            n2=nextTerm
        }
    }
    const fibonacci2=(num)=>{
        let n1=0;
        let n2=1;
        let nextTerm=0;
        console.log(n1)
        console.log(n2)
        nextTerm=n1+n2
        while(nextTerm<= num){
            console.log(nextTerm)
            n1=n2;
            n2=nextTerm
            nextTerm = n1 +n2;
        }
    }
    const executeFunction=()=>{
        fibonacci(10);
    }
    const executeFunction2=()=>{
        fibonacci2(8);
    }
    return(
        <>
        <input type="button" value ="Fibo n terms" onClick={executeFunction}/>
        <input type="button" value ="Fibo up to n" onClick={executeFunction2}/>
        </>
    )
}
export default Fibonacci
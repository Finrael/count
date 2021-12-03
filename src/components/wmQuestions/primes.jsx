const Primes = ()=>{
    const checkPrime=(num)=>{
        if(num<0 || num<=3){
            return true
        }
        if (num%2===0 || num%3===0){
            return false
        }

        let i = 5
        while (i*i <=num){
            if(num%i===0 ||  num%(i+2)===0){
                return false
            }
            i +=6;
        }
        return true
    }
    const executeFunction=()=>{
        for (let i =-1 ; i<12; i+=1)
        console.log(checkPrime(i))
    }
    return(
        <>
        <input type="button" value ="Check if number is prime" onClick={executeFunction}/>
        </>
    )
}
export default Primes
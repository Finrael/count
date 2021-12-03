/*
Given a string print the characters with there number of occurences

input :: aaabbbccddddd

output :: a3b3c2d5
*/
const WM7 = ()=>{
    const countOcurrences=(str)=>{
        let map={};
        let resultString=''
        for(const element of str){
            if(map[element]===undefined){
                map[element] = 1
            }else{
                map[element]+=1
            }
        }
        for(const objElements of Object.keys(map)){
            resultString = resultString +objElements+map[objElements]
        }
        return resultString
    }
    const executeFunction=()=>{
        console.log(countOcurrences('aaabbbccddddd'))
    }
    return(
        <>
        <input type="button" value ="occurences" onClick={executeFunction}/>
        </>
    )
}
export default WM7
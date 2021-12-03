/**
 * // I have 10 dollars in my pocket.  Show me ALL merchandise which I can buy at Walmart.
 
//                 Merchandize and costs are:
//                                 Apple:     1 dollar
//                                 Banana:  2 dollars
//                                 Shoe:      8 dollars
//                                 Ring:       9 dollars
//                                 Pillow:    5 dollars
//                                 Bottle:    4 dollars.
 
// Output: 
// Apple + Apple + Apple + Apple + Apple + Apple + Apple + Apple + Apple + Apple
// Apple + Ring
// Banana + Shoe
// Apple + Pillow + Bottle
 */

const map={
1:'apple',
    2:'banana',
     8:'shoe',
    9: 'ring',
5:'pillow',
    4: 'bottle',
}
const Combinations = ()=>{
    const prices = [1, 2, 8, 9, 5, 4];

    const buyItems = (prices, budget,map) => {
        const results = [[]];
        for (const value of prices) {
            const copy = [...results];
            for (const element of copy) {
                results.push(element.concat(value));
            }
        }
        const externalResult = results.filter( arr => { 
            if (arr.length > 0) {
              return arr.reduce((e, sum) => e + sum) === budget;
            }
            return null;
          })
          const mappedResult =[];
           for(const element of externalResult){
               let auxArr=[]
               for(const internalElement of element){
                
                if(map[internalElement]!==undefined){
                    auxArr.push(map[internalElement])
                }  
               }
               mappedResult.push(auxArr)
          }
    return mappedResult
    };



    const executeFunction=()=>{
        console.log(
            buyItems(prices, 5, map)
        );
    }

    return(
        <>
        <input type="button" value ="shopping" onClick={executeFunction}/>
        </>
    )
}
export default Combinations
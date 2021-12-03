import React, { useEffect } from 'react';
import ShowComp from './showComp';
const FetchComp =()=>{
    const [mockData, setMockData] = React.useState([])

    const getData = async()=>{
        const res= await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        console.log('data', data)
        setMockData(data);

    }
 
    const isSubSet=(arr1,arr2)=>{
        let i =0;
        let j =0;
        let m = arr1.length;
        let n = arr2.length;
        for (i=0; i<n;i++){
            for(j=0;j<m; j++)
            if(arr2[i] == arr1[j])
            break;
            if(j=m)
            return false;
        }
            return true
    }
    let arr1 = [ 11, 1, 13, 21, 3, 7 ];
    let arr2 = [ 11, 3, 7, 1 ];
    useEffect(()=>{
        getData();
            },[])
            const callFunction =()=>{
                if (isSubSet(arr1, arr2))
                console.log("arr2[] is "
                               + "subset of arr1[] ");
              else
                console.log("arr2[] is "
                              + "not a subset of arr1[]");
            }
           callFunction(); 
    return( 
        <div>
            {mockData.map(
                (ele)=>(
                        <ShowComp user={ele.title}/>
                    )
            )}
        </div>
    )
}
export default FetchComp
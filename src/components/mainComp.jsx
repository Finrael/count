import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';
import ButtonComp from './buttonComp';
import FetchComp from './fetchComp';
import Factorial from './factorialAlgo';
import StringReversal from './stringReversal';
import PalindromeCheck from './palindromeComp';
import Promise1 from './promises/promise1';
import Algo4 from './algorithms/Algo4';
import Algo5 from './algorithms/Algo5';
import Algo7 from './algorithms/Algo7';
import Algo8 from './core/Algo8';
import WM1 from './core/Algo8';
import WM2 from './wmQuestions/wm2';
import WM3 from './wmQuestions/wm3';
import WM4 from './wmQuestions/wm4';
import WM5 from './wmQuestions/wm5';
import WM6 from './wmQuestions/wm6';
import WM7 from './wmQuestions/wm7';
import WM8 from './wmQuestions/wm8';
import WM1r from './wmQuestions/wm1-2';
import WM2r from './wmQuestions/wm2 copy';
import Fibonacci from './wmQuestions/fibonacci';
import Primes from './wmQuestions/primes';
import WM9 from './wmQuestions/wm9';
import Accordion from './wmQuestions/accordion';
import Combinations from './wmQuestions/Combinations';
import Combinations2 from './wmQuestions/Combinations2'

export const MainComp = ()=>{
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    return(
        <div>
            <p>Current count is: {count} </p>
            <ButtonComp classN="increment" value={'increment'} callback={()=>dispatch(increment())} />
            <ButtonComp classN="decrement" value={'decrement'} callback={()=>dispatch(decrement())} />
            <Factorial/>
            <Promise1/>
            <Algo4/>
            <Algo5/>
            <Algo7/>
            <Algo8/>
            <WM1/>
            <WM2/>
            <WM3/>
            <WM4/>
            <WM5/>
            <WM6/>
            <WM7/>
            <WM8/>
            <WM9/>
            <WM1r/>
            <WM2r/>
            <Fibonacci/>
            <Primes/>
            <StringReversal/>
            <PalindromeCheck />
            <Accordion/>
            <Combinations/>
            <Combinations2/>
            {/* <FetchComp/> */}
        </div>
    )
}
export default MainComp;
import React from 'react';

const PalindromeCheck = ()=>{
    const [phrase, setPhrase] = React.useState('');
    const [invertedPhrase, setInvertedPhrase] = React.useState('');
    const [isPalindrome, setIsPalindrome]=React.useState(false);
    const bindPhrase=(e)=>{
        setPhrase(e.target.value)
    }
    const checkPalindrome = ()=>{
        setInvertedPhrase(phrase.split("").reverse().join(""))
        phrase === invertedPhrase ? setIsPalindrome(true): setIsPalindrome(false);
    }
    return(
        <div>
            <input type='text' placeholder="phrase to check palindrome" onChange={bindPhrase}/>
            <input type='button' value="reverse" onClick={checkPalindrome}/>
            <label>Is this a palindrome {isPalindrome.toString()}</label>
        </div>
    )
}
export default PalindromeCheck;
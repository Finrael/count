import React from 'react';

const StringReversal = ()=>{
    const [phrase, setPhrase] = React.useState('');
    const [invertedPhrase, setInvertedPhrase] = React.useState('');
    const bindPhrase=(e)=>{
        setPhrase(e.target.value)
    }
    const reversePhrase = ()=>{
        setInvertedPhrase(phrase.split("").reverse().join(""))
    }
    return(
        <div>
            <input type='text' placeholder="phrase to revert" onChange={bindPhrase}/>
            <input type='button' value="reverse" onClick={reversePhrase}/>
            <label>resulting phrase {invertedPhrase}</label>
        </div>
    )
}
export default StringReversal;
const WM5 =()=>{
    function fibonacci2(n) {
      if (n===1){
        return [0, 1];
      } 
      else{
        var s = fibonacci2(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
      }
    }
     const  clickHandler=()=> {
     console.log(fibonacci2(21))
      }
        return (
          <input type="button" value="fibonacci" onClick={clickHandler}/>
        );
    }
    export default WM5
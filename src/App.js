import React,{useState} from 'react';
import './App.css'
const App=()=>{
   
   const [result, setResult]= useState("");

   const clickHandler=(event)=>{
     setResult(result.concat(event.target.value));
    }

     const clearDisplay=()=>{
      setResult("");
     }

     const calculate=()=>{
      setResult(eval(result).toString());
     }



  return (
    <div  className="calc">
      <input type="text" placeholder="0" id="answer" value={result}/>
      <input id="btn2" type="button" value="AC" className="button" onClick={clearDisplay}/>
      <input id="btn2" type="button" value="." className="button"  onClick={clickHandler}/>
      <input id="btn2" type="button" value="%" className="button"  onClick={clickHandler}/>
      <input id="btn3" type="button" value="/" className="button"  onClick={clickHandler}/>
      <input type="button" value="7" className="button"  onClick={clickHandler}/>
      <input type="button" value="8" className="button"  onClick={clickHandler}/>
      <input type="button" value="9" className="button"  onClick={clickHandler}/>
      <input id="btn3" type="button" value="*" className="button"  onClick={clickHandler}/>
      <input type="button" value="4" className="button"  onClick={clickHandler}/>
      <input  type="button" value="5" className="button"  onClick={clickHandler}/>
      <input type="button" value="6" className="button"  onClick={clickHandler}/>
      <input id="btn3"   type="button" value="-" className="button"  onClick={clickHandler}/>
      <input  type="button" value="1" className="button"  onClick={clickHandler}/>
      <input  type="button" value="2" className="button"  onClick={clickHandler}/>
      <input  type="button" value="3" className="button"  onClick={clickHandler}/>
      <input id="btn3" type="button" value="+" className="button"   onClick={clickHandler}/>
      <input  id="btn1" type="button" value="0" className="button" onClick={clickHandler} />
      {/* <input id="btn1" type="button" value="Clear" className="button "  onClick={clickHandler}/> */}
      <input id="btn3"  type="button" value="=" className="button " onClick={calculate } />
    </div>
  )
}

export default App;


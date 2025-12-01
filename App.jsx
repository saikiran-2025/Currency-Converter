import { useState } from "react"
import './App.css'
let App=()=>{
  let [amt,setAmt]=useState("")
  let [i,setI]=useState(0)
  let [curr,setCurr]=useState("")
  let a=[1,1/89,1/103,1/11,1/45,1/2.3]
  let getcurr=()=>{
    setCurr((amt*a[i]))
  }
  return(
    <div className="con">
      <h1>💱 Currency Converter</h1>
      <p>Enter Amount in Indian Rupees (₹)</p>
      <div className="search">
        <input type="text" placeholder="Enter amount..." onChange={(e)=>setAmt(e.target.value)}/>
        <select onChange={(e)=>setI(e.target.value)} value={i}>
          <option value="0" disabled>Rs</option>
          <option value="1">Dollar</option>
          <option value="2">Euro</option>
          <option value="3">Yen</option>
          <option value="4">AUD</option>
          <option value="5">Bhat</option>
        </select>
        <button onClick={getcurr}>Convert Currency</button>
      </div>
      {
        curr && <div className="amount">Converted Amount:&nbsp;{curr}</div>
      }
    </div>
  )
}
export default App
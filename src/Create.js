import { useState } from "react";
import { useNavigate } from "react-router";

export function Create() {
  let navigate = useNavigate()
const[fn,setfn]=useState("")
const[ln,setln]=useState("")
const[age,setage]=useState("")
const[box,setbox]=useState(false)

const userData ={
  firstname:fn,
  lastname:ln,
  age:age,
  checkbox:box,

}

let getData = () => {
  let userInfo = JSON.stringify(userData);

  fetch("https://63899fdc4eccb986e895a926.mockapi.io/user", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then((response) => response.json())
    .then((response) => navigate("/edit"));
};

  return (
    <div className='create-container'>

      <div className='input-filds'>
        <h2>DETAILS PAGE</h2>
        <div className='create-container__fn'>
          <input type="text"  value= {fn}   onChange={(e)=>setfn(e.target.value)}  placeholder='Your First name' />
        </div>
        <div className='create-container__ln'>
          <input type="text" value= {ln}   onChange={(e)=>setln(e.target.value)}  placeholder='Your Last name' />
        </div>
        <div className='create-container__age'>
          <input type="number" value= {age}  onChange={(e)=>setage(e.target.value)}   placeholder='Your Age' />
        </div>
        <div className='create-container__checkbox'>

          <input type="checkbox"   onChange={(e)=>setbox(e.target.checked)}  placeholder='' />
          <label for="fn">Agree with Tearm and conditions</label>
        </div>
        <div className='btn'>
          <button onClick={()=>getData()}>Submit</button>
        </div>
      </div>
    </div>
  );
}

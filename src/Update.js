import { useParams } from "react-router"
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";

export function Update() {
  const {id} = useParams()
  console.log(id)

  const [data, setData] = useState(null);

  let getData = () => {
    fetch(`https://63899fdc4eccb986e895a926.mockapi.io/user/${id}`).then(val => val.json()).then(dt =>setData(dt));
  };

  useEffect(() => getData(), []);


  return (
    <div>

      {data ? <UpdataField id={id} data={data} /> : "Wait For Few Second ...."}
    </div>
  );
}
  
function UpdataField({data,id}){
  let navigate = useNavigate()
  const[fn,setfn]=useState(data.firstname)
  const[ln,setln]=useState(data.lastname)
  const[age,setage]=useState(data.age)
  const[box,setbox]=useState(data.checkbox)
  const userData ={
    firstname:fn,
    lastname:ln,
    age:age,
    checkbox:box,
  
  }
  let sample = ()=>{
    console.log(userData)
  }
  let postData = () => {
    let userInfo = JSON.stringify(userData);
  
    fetch(`https://63899fdc4eccb986e895a926.mockapi.io/user/${id} `, {
      method: "PUT",
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
  
            <input type="checkbox"  checked={box} onChange={(e)=>setbox(e.target.checked)}  placeholder='' />
            <label for="fn">Agree with Tearm and conditions</label>
          </div>
      <div className='btn'>
        <button onClick={()=>postData()}>Submit</button>
      </div>
    </div>
  </div>
  )
}

import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";

export function Edit() {
  const [data, setData] = useState(null);

  let getData = () => {
    fetch("https://63899fdc4eccb986e895a926.mockapi.io/user").then(val => val.json()).then(dt => setData(dt));
  };

  useEffect(() => getData(), []);


  return (
    <div>

      {data ? <EditTable getData={getData} data={data} /> : "Wait For Few Second ...."}
    </div>
  );
}
function EditTable({ data, getData }) {
  let navigate = useNavigate();

  let dataRemove = (ele) => {
    fetch(`https://63899fdc4eccb986e895a926.mockapi.io/user/${ele}`, {
      method: "DELETE"
    }).then(() => getData());
    console.log("Clicked");
  };
  return (

    <div className='table-cont'>

      <table>
        <thead>
          <th>Fisrt name</th>
          <th>Last name</th>
          <th>Age</th>
          <th>Edit Area</th>
          <th>Delete Area</th>


        </thead>
        <tbody>
          {data.map(data => {
            return (
              <tr>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.age}</td>
                <td><button onClick={()=>navigate(`/update/${data.id}`)}>✏️ Update</button></td>

                <td><button onClick={() => dataRemove(data.id)}>🚫 Delete</button></td>
              </tr>
            );
          })}
          

        </tbody>
      </table>
      {/* <button onClick={()=>getdata("sakthi")}>click</button> */}
    </div>
  );
}

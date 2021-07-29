import React from "react";
import Select from 'react-select'
import { useState } from "react";
import Axios from "axios";


export default function Cards({ name, age, city, country,sex, id }) {

  let countryList= [
    {
    value:1,
    label:"Male"
  },
  {value:2,
  label:"Female"}
  ]
  const [name1, setName] = useState(name);
  const [age1, setAge] = useState(age);
  const [city1, setCity] = useState(city);
  const [country1, setCountry] = useState(country);
  const [sex1, setSex] = useState(sex);
  const [update, setUpdate] = useState(false);

  const [gender,setGender]=useState(countryList.label)
  const Sex=(e)=>{
       setGender(e.label)
           }
console.log(gender);
  const deleteData = () => {
    Axios.post("http://localhost:5000/deleteUser", { _id: id }).then((res) =>
      window.location.reload()
    );
  };

  const updateData = () => {
    const data = {
      name: name1,
      age: age1,
      city: city1,
      country: country1,
      sex:gender,
      _id: id,
    };
    Axios.post("http://localhost:5000/update", data).then((res) => {
      window.location.reload();
    });
  };

  return (
    <tr>
    <td> {update ? (
          <input className="updates" value={name1} onChange={(e) => setName(e.target.value)} />
        ) : (
          name1
        )}</td>
      <td>{update ? (
          <input className="updates"  value={age1} onChange={(e) => setAge(e.target.value)} />
        ) : (
          age1
        )}</td>
      <td> {update ? (
          <input className="updates"  value={city1} onChange={(e) => setCity(e.target.value)} />
        ) : (
          city1
        )}</td>
      <td> {update ? (
          <input className="updates" 
            value={country1}
            onChange={(e) => setCountry(e.target.value)}
          />
        ) : (
          country1
        )}</td>
      <td> {update ? <Select options={countryList} onChange={Sex}></Select> : (
          sex1
        )}</td>
      
        
        <td><i class="fas fa-edit" onClick={() => setUpdate(true)}></i></td>
        {update?"":<td><i class="fas fa-trash-alt" onClick={() => deleteData()}></i></td>}
        <td>{update ?<i class="fas fa-check-circle" onClick={() => updateData()}></i> : null}</td>
    </tr>
  )
}

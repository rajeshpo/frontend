import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Select from 'react-select'
import { useState } from "react";
import Axios from "axios";
const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Create() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [name1, setName] = useState(null);
  const [age1, setAge] = useState(null);
  const [city1, setCity] = useState(null);
  const [country1, setCountry] = useState(null);
  const [sex1, setSex] = useState(null);

let countryList= [
  {
  value:1,
  label:"Male"
},
{value:2,
label:"Female"}
]

const Sex=(e)=>{
  setSex(e.label)
}
console.log(sex1);

  const postData = (e) => {
    e.preventDefault();
    const data = {
      name: name1,
      age: age1,
      city: city1,
      country: country1,
      sex:sex1
    };
    Axios.post("https://crudops.herokuapp.com/create", data).then((res) => {
      window.location.reload();
    },(error)=>{
      console.log(error)
    }).catch(error=>{
console.log(error)
    })

  };
 


  return (
    <div className="formda">
       <form>
   <div className="form-group">
     <label>Name</label>
     <input type="text" value={name1} onChange={(e)=>setName(e.target.value)} required  className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name" />
    
   </div>
   <div className="form-group">
     <label>Age</label>
     <input type="Number" value={age1}  onChange={(e)=>setAge(e.target.value)} required className="form-control" id="age" placeholder="Enter your Age"/>
   </div>
   <div className="form-group">
   <label>City</label>
     <input type="text" value={city1}  onChange={(e)=>setCity(e.target.value)} required className="form-control" id="city" placeholder="Enter your City"/>
   </div>
   <div className="form-group">
   <label>Country</label>
     <input type="text"  value={country1} onChange={(e)=>setCountry(e.target.value)} required className="form-control" id="country" placeholder="Enter your Country"/>
   </div>
   <div className="form-group">
   <label>Sex</label>
   <Select options={countryList} required onChange={Sex}></Select>
   </div>
   <button type="submit" className="btn btn-primary" onClick={(e)=>{postData(e)}}>Submit</button>
  
 </form>
    </div>
  );
}


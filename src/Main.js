import Create from "./Create";


import Axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Cards";

export default function Main(){
  const [data, setData] = useState([]);
  const [search,setSearch]=useState("")
  useEffect(() => {
    Axios.get("https://crudops.herokuapp.com/getUsers").then((res) => setData(res.data));
  }, []);
 
const filteredUsers=data.filter(user=>{
  let searchvalue=user.name+" "+user.age+" "+user.city+" "+user.country;
  return searchvalue.toLowerCase().includes(search.toLowerCase())
})
 

  return (
    <div className="flexbox">
      
      <div>
      <div className="App">
     
     <div className="Creation">
     <h1 className="text-center">MERN STACK CRUD OPERATIONS</h1>
    <Create/>
     </div>
     <div className="infut">
     <label className="text-green Creation-1">Search User</label>
     <input placeholder="Search here"  className="form-control searchbox" onChange={(e)=>{ 
        setSearch(e.target.value)}}/>
  
     </div>
     <div className="Creation-1">
     <table class="table table-striped">
       <thead>
        <tr>
        <th scope="col">Name</th>
         <th scope="col">Age</th>
         <th scope="col">City</th>
         <th scope="col">Country</th>
         <th scope="col">Sex</th>
         <th scope="col">Updation</th>
        
        </tr>
       </thead>
       <tbody>
        
         {filteredUsers.map((value) => (
         
       
       <Cards key={value.name}
         name={value.name}
         age={value.age}
         city={value.city}
         country={value.country}
         sex={value.sex}
         id={value._id}
       />
      
     ))}
        
       </tbody>
       
     </table>
    </div>
    </div>
      </div>
    </div>
  );
}



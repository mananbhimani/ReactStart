import React from 'react'
import { useParams ,useSearchParams} from 'react-router-dom'
import { arr } from './Users';


export default function UsersDetail() {
  const params = useParams();
  const [SearchParams,getParams] = useSearchParams();

  var id= SearchParams.get('id');
  var nam = SearchParams.get('name');
  var ag =SearchParams.get('age');
  var rol = SearchParams.get('role');
  console.log(id,nam,ag,rol);
  const userID = params.userID

  const pe = {
    id: "",
    name: "",
    age: "",
    role: "",
  };
  arr.forEach(usre => {
    if (usre.id == userID || ( usre.id == id) || (usre.name == nam) || (usre.age == ag) || (usre.role == rol)) {
      pe.id = usre.id;
      pe.name = usre.name;
      pe.age = usre.age;
      pe.role = usre.role;
    }
  });
  if (pe.id == "") {
    alert("you entering is invalid")
    
  }
  else{
    alert('you data is succesfuly loadeds')
  }

  return (
    <>
      
      <div className='container' id="usersdata">UsersDetail:-</div>
      <div className="container">
        <p>{`ID: ${pe.id} , Name: ${pe.name} , Age: ${pe.age} , Role: ${pe.role}`}</p>
      </div >
    </>
  )
}

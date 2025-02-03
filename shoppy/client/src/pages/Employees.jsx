import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Employees() {
   const [ employees, setEmployees ] = useState([]); 


  useEffect(()=>{
    axios.get('http://localhost:9000/employee/all')
          .then((res)=> setEmployees(res.data))
          .catch((error)=>console.log(error)) 
  },[]);

  console.log('employees-->',employees);
  

  return (
    <div>
      <h1>db test!!</h1>
      <table border='1'>
        <tr>
          <th>번호</th>
          <th>사원명</th>
          <th>사원명(영어)</th>
          <th>성별</th>
          <th>입사일</th>
          <th>급여</th>
        </tr>
        {
          employees && employees.map((emp)=>(
            <tr>
              <td>{emp.no}</td>
              <td>{emp.name}</td>
              <td>{emp.ename}</td>
              <td>{emp.gender}</td>
              <td>{emp.hiredate}</td>
              <td>{emp.salary}</td>
            </tr>  
          ))
        }
      </table>
    </div>
  );
}


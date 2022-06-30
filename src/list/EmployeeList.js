import React,{useState} from 'react'

export default function EmployeeList() {
    const listEmployee = [
        {empId : 1 , fullName:'Barkah',salary:4500},
        {empId : 2 , fullName:'Ade',salary:5000},
        {empId : 3 , fullName:'Kurnia',salary:5500},
    ]
    const [employee,setEmployee] = useState(listEmployee)
    const PenambahanGaji = (id) => {
        setEmployee(
            [...employee.map(emp=> {
                if (id === emp.empId) {
                    emp.salary = emp.salary + 500
                    return emp
                } else {
                    return emp
                }
            })]
        )
    }
    const PenguranganGaji = (id) => {
        setEmployee(
            [...employee.map(emp=> {
                if (id === emp.empId) {
                    emp.salary = emp.salary - 500
                    return emp
                } else {
                    return emp
                }
            })]
        )
    }
    const NaikGaji = (id) => {
        setEmployee(
            [...employee.map(emp=> {
                if (id === emp.empId) {
                    emp.salary = emp.salary + (emp.salary*10/100)
                    return emp
                } else {
                    return emp
                }
            })]
        )
    }
    const TurunGaji = (id) => {
        setEmployee(
            [...employee.map(emp=> {
                if (id === emp.empId) {
                    emp.salary = emp.salary - (emp.salary*5/100)
                    return emp
                } else {
                    return emp
                }
            })]
        )
    }
  return (
    <div>
        <h2>List Employee</h2>
        <ul>
            {
                (employee||[]).map(emp=>(
                    <li key={emp.empId}>
                        <p>Emp id : {emp.empId}</p>                
                        <p>Full Name : {emp.fullName}</p>                
                        <p>Salary : {emp.salary}</p>   
                        <button onClick={()=>PenambahanGaji(emp.empId)}>Penambahan Gaji</button>             
                        <button onClick={()=>PenguranganGaji(emp.empId)}>Pengurangan Gaji</button>             
                        <button onClick={()=>NaikGaji(emp.empId)}>Raise Salary 10%</button>             
                        <button onClick={()=>TurunGaji(emp.empId)}>Cut Salary 5%</button>             
                    </li>                    
                )) 
            }
        </ul>
    </div>
  )
}

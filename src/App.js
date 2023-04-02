import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import AddEmployee from "./components/AddEmployee";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [employees, set_employees] = useState([
    {
      id: 1,
      name: "Roma",
      role: "Developer",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      id: 2,
      name: "Mohamed",
      role: "Marketmaker",
      img: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?",
    },
    {
      id: 3,
      name: "Hans",
      role: "CEO",
      img: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg",
    },
    {
      id: 4,
      name: "Tapiwa",
      role: "Manager",
      img: "https://images.pexels.com/photos/4153800/pexels-photo-4153800.jpeg",
    },
  ]);

  function updateEmployee(id, new_name, new_role) {
    const updated_employees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: new_name, role: new_role };
      }

      return employee;
    });
    set_employees(updated_employees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    set_employees([...employees, newEmployee]); // Take all the employees in a list and add a new one
  }

  return (
    <div className="App">
      <div className="flex flex-wrap mt-3 justify-center">
        {employees.map((employee) => {
          return (
            <Employee
              key={employee.id}
              id={employee.id}
              name={employee.name}
              role={employee.role}
              img={employee.img}
              updateEmployee={updateEmployee}
            />
          );
        })}
      </div>
      <AddEmployee newEmployee={newEmployee} />
    </div>
  );
}

export default App;

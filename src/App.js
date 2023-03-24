import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [employees, set_employees] = useState([
    {
      name: "Roma",
      role: "Developer",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      name: "Mohamed",
      role: "Marketmaker",
      img: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?",
    },
    {
      name: "Hans",
      role: "CEO",
      img: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg",
    },
    {
      name: "Tapiwa",
      role: "Manager",
      img: "https://images.pexels.com/photos/4153800/pexels-photo-4153800.jpeg",
    },
  ]);

  return (
    <div className="App">
      <div className="flex flex-wrap mt-3 justify-center">
        {employees.map((employee) => {
          return (
            <Employee
              key={uuidv4()} //Generate a random key
              name={employee.name}
              role={employee.role}
              img={employee.img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

import React, {useState} from 'react';

import Form from "./components/Form";
import FormList from "./components/FormList";


import './App.css';


function App() {

  const [members, setMember] = useState([
    {
      id: 1,
      name: "Christian",
      email: "christian.martin.auld@gmail.com",
      role: "CEO"
    }
  ]);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMember([...members, newMember])
  };

  return (
    <div className="App">
      <h1>Team List</h1>
      <FormList addMemberFn={addMember}/>
      <Form membersList={members}/>
    </div>
  );
}

export default App;

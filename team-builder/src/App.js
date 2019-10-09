import React, {useState} from 'react';

import Form from "./components/Form";
import FormList from "./components/FormList";


import './App.css';
import { memberExpression } from '@babel/types';


function App() {

  const [members, setMember] = useState([
    // {
    //   id: 1,
    //   name: "Christian",
    //   email: "christian.martin.auld@gmail.com",
    //   role: "CEO"
    // }
  ]);

  const removeMember = index => {
    const newMembers = [...members];
    newMembers.splice(index, 1);
    setMember(newMembers);
  }


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
      <Form membersList={members} removeMember={removeMember}/>
    </div>
  );
}

export default App;

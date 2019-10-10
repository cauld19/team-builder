import React, {useState} from 'react';

import Form from "./components/Form";
import FormList from "./components/FormList";


import './App.css';


function App() {

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "christian",
      email: "christian_auld@hotmail.com",
      role: "Back-end"
    }
]);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: '', email: '', role: '' }

  const [currentMember, setCurrentMember] = useState(initialFormState)



  const editMember = member => {
    setEditing(true)
    setCurrentMember({ id: member.id, name: member.name, email: member.email, role: member.role  })
    console.log(currentMember, editing)
  }

  const updateMember = (id, updatedMember) => {
    setEditing(false)
  
    setMembers(members.map(member => (member.id === id ? updatedMember : member)))
    console.log(updatedMember)
  }

  const removeMember = index => {
    setEditing(false)
    const newMembers = [...members];
    newMembers.splice(index, 1);
    setMembers(newMembers);
  }


  const addMember = member => {
    const newMember = {
      id: members.length + 1,
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember])
  };

  return (
    <div className="App">
      <h1>Team List</h1>
      <FormList 
        addMemberFn={addMember}
        currentMember={currentMember}
        updateMember={updateMember} 
        editing={editing}
        setEditing={setEditing}/>
      <Form membersList={members} removeMember={removeMember} editMember={editMember}/>
    </div>
  );
}

export default App;

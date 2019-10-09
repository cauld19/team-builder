import React from "react";

const Form = props => {
    console.log(props)
    return (
        <div className="form-list">
            {props.membersList.map(member => {
                return (
                    <div className="member" key={member.id}>
                        <h2>{member.name}</h2>
                        <h4>{member.role}</h4>
                        <p>{member.email}</p>
                        <button onClick={()=>props.removeMember(props.index)}>Remove</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Form;
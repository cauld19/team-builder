import React, {useState, useEffect} from "react";

const FormList = props => {

    const [member, setMember] = useState(props.currentMember);

    useEffect(() => {
        if(props.editing){
            setMember(props.currentMember)
        }
        
      }, [props])


    const handleChange = e => {
        setMember({...member, [e.target.name]: e.target.value});
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        if (props.editing === false) {
            props.addMemberFn(member);
            setMember({name: "", email: "", role: ""})
        } else {
            props.updateMember(props.currentMember.id, member);
            setMember({name: "", email: "", role: ""})
        }
        console.log(props)
    }

    

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                value={member.name}
                onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type="text"
                value={member.email}
                onChange={handleChange}
            />
            <label htmlFor="role">Role</label>
            <select id="roleSelect" name="role" onChange={handleChange}>
                <option value=""></option>
                <option value="Front-end">Front-end</option>
                <option value="Back-end">Back-end</option>
                <option value="UI">UI</option>
            </select>
            {/* <input
                id="role"
                name="role"
                type="text"
                value={member.role}
                onChange={handleChange}
            /> */}
            <button type="submit">Add/Edit</button>
    </form>
    )
}

export default FormList;
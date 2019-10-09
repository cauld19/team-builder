import React, {useState} from "react";

const FormList = props => {
    const [member, setMember] = useState({name: "", email: "", role: ""});

    const handleChange = e => {
        setMember({...member, [e.target.name]: e.target.value});
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        props.addMemberFn(member);
        setMember({name: "", email: "", role: ""})
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
            <input
                id="role"
                name="role"
                type="text"
                value={member.role}
                onChange={handleChange}
            />
            <button type="submit">Add member</button>
    </form>
    )
}

export default FormList;
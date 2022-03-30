import { useState } from "react";

function Test () {
    const [users, setUser] = useState(
        [
            { id: 1, name:'Pedro'},
            { id: 2, name:'Juan'},
        ])

        return (
            <ul>
                {users.map( usuarios => <li key={usuarios.id}>{usuarios.name}</li>)}
            </ul>
        )
}

export default Test;
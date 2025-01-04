import React, { useState } from "react";

function App() {
    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: "",
    });

    function handleChange(event) {
        const { name, value } = event.target; // Destructur

        setContact((prevValue) => {
            return {
                // Spread operator
                // This will copy all the previous values of the object
                // and then update the value of the name that is being changed.
                // This way we can update the value of any input field without
                // affecting the other fields.
                ...prevValue,
                [name]: value,
            };
        });
    }

    return (
        <div className="container">
        <h1>
            Hello {contact.fName} {contact.lName}
        </h1>
        <p>{contact.email}</p>
        <form>
            <input onChange={handleChange} name="fName" placeholder="First Name" />
            <input onChange={handleChange} name="lName" placeholder="Last Name" />
            <input onChange={handleChange} name="email" placeholder="Email" />
            <button>Submit</button>
        </form>
        </div>
    );
}

export default App;

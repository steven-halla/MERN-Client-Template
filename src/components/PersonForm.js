import React, {useState } from 'react';
import axios from 'axios';

export default () => {
    // keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onSubmitHandler = event => {
        //prevent defaul behavior of the submit
        event.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    //onChange to update firstName and lastName
    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input type="text" onChange = {(event) =>setFirstName(event.target.value)}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange= {(event) => setLastName(event.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
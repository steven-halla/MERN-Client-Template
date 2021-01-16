import React, { useEffect, useState } from 'react';
import PersonForm from '../components/PersonForm';

// import axios from 'axios';

export default () => {
    return(
        <div>
            <PersonForm/>
        </div>
    )
}

// export default () => {
//     const [message, setMessage ] = useState("Loading...");

//     useEffect(() => {
//         axios.get('http://localhost:8000/api')
//             .then(response => {
//                 setMessage(response.data.message)
//             })
//     //since we are making a call to an API make an empty array
//     }, [])

//     return(
//         <div>
//             <h2>Message from the backend: {message} </h2>
//         </div>
//     )
// }
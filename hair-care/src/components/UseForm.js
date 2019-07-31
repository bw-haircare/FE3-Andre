import React, {useState} from 'react';
import callbackify from 'stack-utils';

const UseForm = (callback) => {
    const [registration, setRegistration] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        registrationErrors: ""
        });
    const handleChange = (e)=> {
        const {name, value} = e.target;
      console.log(name);
      console.log(value);
      setRegistration({...registration,
        [name]: value});
    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        callback();
    }
   
}
export default UseForm
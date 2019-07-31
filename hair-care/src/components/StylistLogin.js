import React, {useState} from 'reach';

const Login = ()=> {
    const [creds, setCreds] = useState({
        username: '', password: ''
    });
    const handleChange = (e)=> {
        const {name, value} = e.target;
     
      setRegistration({...registration,
        [name]: value});
    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        setRegistration({...registration})
        console.log(registration)
    }    
}
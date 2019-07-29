import React, {useState, useEffect} from 'react';

const User = ()=> {
const [registration, setRegistration] = useState({
first_name: "",
last_name: "",
username: "",
email: "",
password: "",
registrationErrors: ""
});

const handleChage = (e)=> {
    const {name, value} = e.target;
  console.log(name);
  console.log(value);
  setRegistration({...registration,
    [name]: value});
}
    return (
        <div>
            <h1>User Registration</h1>
            <form noValidate>
                <fieldset>
                    <label htmlFor="">
                        First Name:
                        <input type='text' name='first_name' value={registration.first_name} onChange={handleChage} />
                    </label>
                    <label htmlFor="">
                        Last Name:
                        <input type='text' name='last_name' value={registration.last_name} onChange={handleChage} />
                    </label>
                    <label htmlFor="">
                        Username:
                        <input type='text' name='username' value={registration.username} onChange={handleChage}/>
                    </label>
                    <label htmlFor="">
                        Email:
                        <input type='email' name='email' value={registration.email} onChange={handleChage} />
                    </label>
                    <label htmlFor="">
                        Password:
                        <input type='password' name='password' value={registration.password} onChange={handleChage} />
                       {/*  Error message */}
                    </label>
                    <button type='submit'>Sign Up</button>
                </fieldset>
            </form>
        </div>
    );
}
export default User;
import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { notification } from 'antd'
import '../../App.css'

const Register = () => {
    const history = useHistory();
    const handleSubmit = async (event) => {
        console.log("Registring");
        try {
            event.preventDefault();
            const form = event.target;
            const user = {         
                "name": form.name.value,
                "password": form.password.value,
                "email": form.email.value,
                "lastName": form.lastName.value,
                "phone": form.phone.value,
                "address": form.address.value,
                //"role": form.role.value,
            }
            console.log("user: ", user);
            console.log("type of user: ", typeof user);
            await axios.post('http://127.0.0.1:8000/api/auth/signup', user)
            notification.success({ message: 'Registered!', description: 'User successfully registered' })
            history.push('/login')
        } catch (error) {
            console.error(error)
            notification.error({ message: 'Register failed', description: 'there was a problem trying to register the user' })
        }

    }
    return (
        <div className="contentStyle">
            <form className="register" onSubmit={handleSubmit}>
                <h2>Register:</h2>
                <h3>Personal data</h3>
                <p>Name: <input type="text" name="name" placeholder="Name" /></p>
                <p>Password: <input type="password" name="password" placeholder="Password" /></p>
                <p>Email: <input type="email" name="email" placeholder="Email" /></p>
                <p>Last name: <input type="text" name="lastName" placeholder="Last Name" /></p>
                <p>Phone: <input type="text" name="phone" placeholder="Phone" /></p>
                <p>Address: <input type="text" name="address" placeholder="Address" /></p>
                <p>Role: <input type="text" name="role" placeholder="Role" /></p>
                <button type="submit">Register now!</button>
                <p/>
            </form>
        </div>
    )
}

export default Register
import axios from "axios";
import { useState } from "react";

const Register = () => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const registerData = {
            username: username,
            email: email,
            password: password
        }

        try {
            const {data} = await axios.post('http://localhost:6001/user/register', registerData)
            console.log(data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const handleUsernameChange = (e) => {
        setUserName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return(
        <div className="main">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <input type={'text'} placeholder={'username'} onChange={handleUsernameChange} value={username}/>
                <input type={'text'} placeholder={'email'} onChange={handleEmailChange} value={email}/>
                <input type={'password'} placeholder={'password'} onChange={handlePasswordChange} value={password}/>
                <input type={'submit'} value={'Register'}/>
            </form>
        </div>
    )
};

export default Register;
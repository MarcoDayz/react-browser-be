import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const loginData = {
            email: loginEmail,
            password: loginPassword
        }

        try {
            const {data} = await axios.post('http://localhost:6001/user/login', loginData)
            console.log(data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const handleEmailChange = (e) => {
        setLoginEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setLoginPassword(e.target.value)
    }

    return (
        <div className="main">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input type={'text'} placeholder={'email'} onChange={handleEmailChange} value={loginEmail}/>
                <input type={'password'} placeholder={'password'} onChange={handlePasswordChange} value={loginPassword}/>
                <input type={'submit'} value={'Login'}/>
            </form>
        </div>
    )
};

export default Login;
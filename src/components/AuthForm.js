
import React, { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authService } from "fbase";


const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) => {
        const { target: { name, value } } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }

    };
    const LogIn = async (event) => {
        event.preventDefault();
        try {
          await signInWithEmailAndPassword(authService, email, password);
          
        } catch (error) {
          setError(error.message);
        }
    };
    return (
        <>
            <form onSubmit={LogIn} className="container">
                <input name="email" type="email" placeholder="이메일" required value={email} onChange={onChange} className="authInput" />
                <input name="password" type="password" placeholder="비밀번호" required value={password} className="authInput" onChange={onChange} />
                <input type="submit"  className="authInput authSubmit" value={newAccount ? "로그인" : "Log In"} />
                {error && <span className="authError">{error}</span>}
            </form>
        </>
    );
}

export default AuthForm
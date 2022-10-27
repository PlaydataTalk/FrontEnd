
import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
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
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                data = await createUserWithEmailAndPassword(authService, email, password);
            } else {
                data = await signInWithEmailAndPassword(authService, email, password);
            }

            console.log(data);
        } catch (error) {
            setError(error.message);
        }

    };
    const toggleAccount = () => setNewAccount(prev => !prev);
    return (
        <>
            <form onSubmit={onSubmit} className="container">
                <input name="email" type="email" placeholder="이메일" required value={email} onChange={onChange} className="authInput" />
                <input name="password" type="password" placeholder="비밀번호" required value={password} className="authInput" onChange={onChange} />
                <input type="submit"  className="authInput authSubmit" value={newAccount ? "계정 생성" : "로그인"} />
                {error && <span className="authError">{error}</span>}
            </form>
            <span onClick={toggleAccount} className="authSwitch">{newAccount ? "로그인" : "계정 생성"}
            </span></>
    );
}

export default AuthForm
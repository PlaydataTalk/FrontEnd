import React, { useState } from "react";
import { authService } from "fbase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { dbService } from "fbase";
import { Link } from "react-router-dom";

const SignUp = ({userObj, refreshUser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [code, setCode] = useState("");
    const [newAccount] = useState(true);
    const [name, setName] = useState("");
    // const onSubmit = async (event) => {
    //     event.preventDefault();
    //     if (userObj.displayName !== name) {
    //         await updateProfile(authService.currentUser, { displayName: name });
    //         refreshUser();
    //     }
    // };
    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "name") {
            setName(value);
        } else if (name === "code"){
            setCode(value);
        }
    };
    const CreateAccount = async (event) => {
        event.preventDefault();
        if(code === "playdata"){
            try {
                await createUserWithEmailAndPassword(authService, email, password);
                await setDoc(doc(dbService, "user", email), {
                    userId: email,
                    pw: password,
                    name: name,
                    imgUrl: ""
                  });
            } catch (error) {
                setError(error.message);
            }
        }else{
            alert('코드가 틀렸습니다.')
        }
    };
    return (
        <div className="SignupContainer">
            <form onSubmit={CreateAccount}>
                <input className="inputSignup"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={onChange}
                />
                <br></br>
                <input className="inputSignup"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={onChange}
                />
                <br></br>
                {/* <form onSubmit={onSubmit}> */}
                <input className="inputSignup"
                    name="name"
                    type="text"
                    placeholder="name"
                    required
                    value={name}
                    onChange={onChange}
                />
                <br>
                </br>
                {/* </form> */}
                <input className="inputSignup"
                    name="code"
                    type="text"
                    placeholder="code"
                    required
                    value={code}
                    onChange={onChange}
                />
                <hr></hr>
                <input className="authSignCancle"
                    type="submit"
                    value={newAccount ? "회원가입" : "Sign Up"}
                />
                <br>
                </br>
                <Link to="/">
                    <button className="authSignCancle">취소</button>
                </Link>
                {error}
            </form>
        </div>
    );
};
export default SignUp;
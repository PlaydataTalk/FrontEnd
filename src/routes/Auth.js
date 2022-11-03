import { authService } from "fbase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import AuthForm from "components/AuthForm";

import { Link } from "react-router-dom";
import Modal from 'react-modal';

const Auth = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [code, setCode] = useState("");
    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === "code") {
            setCode(value);
        }
    };

    const onSocialClick = async (event) => {
        const {
            target: { name },
        } = event;
        let provider;

        if (name === "google") {
            if (code === "playdata") {
                provider = new GoogleAuthProvider();
            } else if (code === "") {
                alert('코드를 입력해주세요.');
            } else {
                alert('코드가 틀렸습니다.');
            }
        }
        await signInWithPopup(authService, provider);
    };
    Modal.setAppElement('#root')

    return (
        <div className="authContainer"
        >

            <img src="https://cdn.imweb.me/thumbnail/20221021/f1d3399849ade.png"
                style={{
                    marginBottom: 30,
                    width: "20%",
                    height: "auto"
                }}>
            </img>
            <AuthForm />
            <Link to="/SignUp">
                <button className="authSignup">회원가입</button>
            </Link>
            <div >
                <input className="authBtns" name="code" type="text" placeholder="가입코드"
                    required value={code} onChange={onChange} />

                <button onClick={onSocialClick} name="google" className="authBtn">
                    Google로 로그인 <FontAwesomeIcon icon={faGoogle} />
                </button>
            </div >
            <>
                <button onClick={() => setModalIsOpen(true)}>Modal Open</button>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    test
                    <button onClick={() => setModalIsOpen(false)}>close</button>
                </Modal>
            </>

        </div>
    )
};
export default Auth;
import React, { useEffect, useState } from 'react'
import firebase from '../../firebase.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();



    const LoginFunc = async (e) => {
        e.preventDefault();
        if (!(email && password)) {
            return alert("모든 값을 채워주세요.");
        }
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            alert("로그인에 성공하였습니다.");
            navigate("/");
        }
        catch (err) {
            console.log(err);
            setErrorMsg("이메일과 비밀번호 확인해 주세요")
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setErrorMsg("");
        }, 5000)
    }, [errMsg])

    return (
        <div className='login__Wrap'>
            <div className='login__header'>
                <h2>
                    Login
                </h2>
                <p>로그인을 해주세요.</p>
            </div>
            <form className="login__form" action='' name='loginSave' method='post'>
                <fieldset>
                    <legend className='blind'>로그인 영역</legend>
                    <div className='login__input'>
                        <label htmlFor='youEmail' className='blind'>이메일</label>
                        <input
                            type='email'
                            id='youEmail'
                            name='youEmail'
                            placeholder='이메일을 입력해주세요'
                            autoComplete='off'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                    </div>
                    <div className='login__input'>
                        <label htmlFor='youPass' className='blind'>비밀번호</label>
                        <input
                            type='password'
                            id='youPass'
                            name='youPass'
                            placeholder='비밀번호를 입력해주세요'
                            autoComplete='off'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                        ></input>
                    </div>
                    <button type='submit' onClick={(e) => LoginFunc(e)} className='login__btn'>로그인</button>
                    <div style={{ color: "red" }}>
                        {errMsg !== "" && <p>{errMsg}</p>}
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Login
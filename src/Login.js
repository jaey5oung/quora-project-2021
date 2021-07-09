import { ArrowForwardIos } from "@material-ui/icons";
import React, { useState } from "react";
import "./Login.css";
import { auth, provider } from "./firebase";


function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    // 로그인
    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
               
                console.log(11,auth);
            })
            .catch((e) => alert(e.massage));

        setEmail("");
        setPassword("");
    };
    //preventDefault() 새로고침 방지
    //auth는 파이어베이스에서 import 해온것이다 , 서버에 이메일과 패스워드가 있는지 확인하구
    //인풋에 있던 email,password value들을 가져온다
    //then으로 성공을하면 auth라는 인자를 넣어서 성공이라고 표현하고
    //실패를 하면 catch로 잡아서 이벤트 메세지를 전달한다.
    //그리고 나서 이메일과 패스워드를 초기화시켜라




    // 회원가입
    const handleRegister = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    console.log(auth);
                }
            })
            .catch((e) => alert(e.massage));

        setEmail("");
        setPassword("");
    };
    



    // 구글 로그인
    const signIn = () => {
        auth.signInWithPopup(provider).catch((e) => alert(e.massage));
        console.log(auth);
    };
    //firebase.js에서 정의해줬던 provider(공급)을 갖고온다 이후 auth안에있는 sighInWithPopup 을 사용해준다





    return (
        <div className="login">
            <div className="login_container">
                <div className="login_logo">
                    <img
                        src="https://qph.fs.quoracdn.net/main-qimg-d049946241e53481209a8938b70321e0"
                        alt=""
                    />
                </div>

                <div className="login_auth">
                    <div className="login_authOptions">
                        <div className="login_authOption">
                            <img
                                className="login_googleAuth"
                                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                                alt=""
                            />
                            <p onClick={signIn}>Sigh in with Google</p>
                        </div>
                    </div>

                    <div className="login_emailPass">
                        <div className="login_label">
                            <h4>로그인</h4>
                        </div>
                        <div className="login_inputFields">
                            <div className="login_inputField">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="login_inputField">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="login_forgButt">
                            <small>비밀번호 찾기</small>
                            <button type="submit" onClick={handleLogin}>
                                로그인
                            </button>
                        </div>
                        <button onClick={handleRegister}>회원가입</button>
                    </div>
                </div>
                <div className="login_lang">
                    <p>언어 설정</p>
                    <ArrowForwardIos fontSize="small" />
                </div>
                <div className="login_footer">
                    <p>About</p>
                    <p>오시는길</p>
                    <p>비즈니스 문의</p>
                    <p>개인정보처리방침</p>
                    <p>이용약관</p>
                    <p>&copy; 장재영</p>
                </div>
            </div>
        </div>
    );
}

export default Login;

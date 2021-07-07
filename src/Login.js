import { ArrowForwardIos } from "@material-ui/icons";
import React from "react";
import "./Login.css";

function Login() {
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
                            <p>Sigh in with Google</p>
                        </div>

                       
                    </div>

                    <div className="login_emailPass">
                        <div className="login_label">
                            <h4>로그인</h4>
                        </div>
                        <div className="login_inputFields">
                            <div className="login_inputField">
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="login_inputField">
                                <input type="password" placeholder="Password" />
                            </div>
                        </div>
                        <div className="login_forgButt">
                            <small>비밀번호 찾기</small>
                            <button type="submit">로그인</button>
                        </div>
                        <button>회원가입</button>
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
                    <p>근성과 끈기</p>
                    <p>끝까지 하기</p>
                    <p>&copy; 장재영</p>
                </div>
            </div>
        </div>
    );
}

export default Login;

import React, { useState } from "react";
import "./Navbar.css";

import {
    AssignmentIndOutlined,
    BorderAllRounded,
    Home,
    NotificationsOutlined,
    PeopleAltOutlined,
    Search,
    Language,
    ExpandMore,
    Link,
} from "@material-ui/icons";
import { Avatar, Button, Input } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import db, { auth } from "./firebase";
import Modal from "react-modal";
import firebase from "firebase";

function Navbar() {
    const [openModal, setOpenMadal] = useState(false);
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const [inputUrl, setInputUrl] = useState("");

    const handleQuestion = (e) => {
        e.preventDefault();
        setOpenMadal(false);
        db.collection("questions").add({
            question: input,
            imageUrl: inputUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user,
        });
        setInput("");
        setInputUrl("");
    };

    // 인풋에 글을 db에 저장하기위해 firebase에 컬렉션에(questions)를 만든다
    // 이 컬렉션디비에 firebase에 제공되는 함수 add를 통해 질문,imageUrl,timestamp,user를 집어넣는다

    return (
        <div className="navbar">
            <div className="qHeader_logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/2880px-Quora_logo_2015.svg.png"
                    alt=""
                />
            </div>

            <div className="qHeader_icons">
                <div className="qHeader_icon">
                    <Home />
                </div>
                <div className="qHeader_icon">
                    <BorderAllRounded />
                </div>
                <div className="qHeader_icon">
                    <AssignmentIndOutlined />
                </div>
                <div className="qHeader_icon">
                    <PeopleAltOutlined />
                </div>
                <div className="qHeader_icon">
                    <NotificationsOutlined />
                </div>
            </div>
            <div className="qHeader_input">
                <input type="text" placeholder="검색하기" />
                <Search />
            </div>
            <div className="qHeader_Rem">
                <div className="qHeader_avatar">
                    <Avatar src={user.photo} onClick={() => auth.signOut()} />
                </div>
                <Language />
                <Button onClick={() => setOpenMadal(true)}>질문하기</Button>
                <Modal
                    isOpen={openModal}
                    onRequestClose={() => setOpenMadal(false)}
                    shouldCloseOnOverlayClick={false}
                    style={{
                        overlay: {
                            width: 700,
                            height: 632,
                            backgroundColor: "#ba2722",
                            zIndex: "1000",
                            top: "50%",
                            left: "50%",
                            marginTop: "-300px",
                            marginLeft: "-350px",
                            borderRadius: "50px",
                        },
                    }}
                >
                    <div className="modal_title">
                        <h5>질문</h5>
                        <h5>공유하기</h5>
                    </div>
                    <div className="modal_info">
                        <Avatar src={user.photo} />
                        <p>
                            질문자 :{" "}
                            {user.diplayName ? user.diplayName : user.email}
                        </p>
                        <div className="modal_scope">
                            <PeopleAltOutlined />
                            <p>전체공개</p>
                            <ExpandMore />
                        </div>
                    </div>
                    <div className="modal_Field">
                        <Input
                            type="text"
                            placeholder="육하원칙으로 질문을 작성하세요"
                            required
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        {/* required 인풋에 글을 적지않는걸 방지하기위한것 */}
                        <div className="modal_fieldLink">
                            <Link />
                            <Input
                                type="text"
                                placeholder="url 링크만을 작성해 주세요"
                                value={inputUrl}
                                onChange={(e) => setInputUrl(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="modal_button">
                        <button
                            className="addButton"
                            type="text"
                            onClick={handleQuestion}
                        >
                            질문하기
                        </button>
                        <button
                            className="canButton"
                            onClick={() => setOpenMadal(false)}
                        >
                            닫기
                        </button>
                    </div>
                </Modal>
                {/* 모달에는 isOpen , onRequestClose라는 두가지 속성이있다 */}
            </div>
        </div>
    );
}

export default Navbar;

import React, { useState, useEffect } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import {
    ArrowDownwardOutlined,
    ArrowUpwardOutlined,
    ChatBubbleOutlineOutlined,
    MoreHorizOutlined,
    RepeatOneOutlined,
    ShareOutlined,
} from "@material-ui/icons";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
    selectQuestionName,
    setQuestionInfo,
    selectQuestionId,
} from "./features/questionSlice";
import { selectUser } from "./features/userSlice";
import db from "./firebase";
import firebase from "firebase";
import "./";
Modal.setAppElement("#root");

function Post({ key, Id, image, question, timestamp, quoraUser }) {
    const [openModal, setOpenMadal] = useState(false);
    const dispatch = useDispatch();
    const [answer, setAnswer] = useState("");
    const user = useSelector(selectUser);
    const questionId = useSelector(selectQuestionId);
    const questionName = useSelector(selectQuestionName);
    const [getAnswer, setGetAnswer] = useState([]);

    const handleAnswer = (e) => {
        e.preventDefault();

        if (questionId) {
            db.collection("questions")
                .doc(questionId)
                .collection("answer")
                .add({
                    questionId: questionId,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    answer: answer,
                    user: user,
                });
            console.log(questionId, questionName);
            setAnswer("");
            setOpenMadal(false);
        }
    };

    useEffect(() => {
        if (questionId) {
            db.collection("questions")
                .doc(questionId)
                .collection("answer")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) =>
                    setGetAnswer(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            answers: doc.data(),
                        }))
                    )
                );
        }
    }, [questionId]);

    return (
        <div
            className="post"
            onClick={() =>
                dispatch(
                    setQuestionInfo({
                        questionId: Id,
                        questionName: question,
                    })
                )
            }
        >
            <div className="post_info">
                <Avatar src={quoraUser.photo} />
                <h5>
                    {quoraUser.displayName
                        ? quoraUser.displayName
                        : quoraUser.email}
                </h5>
                <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
                {/* ????????? ???????????? ?????? ???????????? ?????? */}
            </div>
            <div className="post_body">
                <div className="post_question">
                    <p>{question}</p>
                    <button
                        className="post_btnAnswer"
                        onClick={() => setOpenMadal(true)}
                    >
                        ????????????
                    </button>
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
                        <div className="modal_question">
                            <h1>{question}</h1>
                            <p>
                                <span className="name">
                                    {quoraUser.displayName
                                        ? quoraUser.displayName
                                        : quoraUser.email}
                                </span>
                                &nbsp; ???????????? ?????? &nbsp;
                                <br />
                                <span className="time">
                                    {new Date(
                                        timestamp?.toDate()
                                    ).toLocaleString()}
                                </span>
                                &nbsp; ??? ?????????
                            </p>
                        </div>
                        <div className="modal_answer">
                            <textarea
                                placeholder="????????? ????????? ?????????"
                                type="text"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                            />
                        </div>

                        <div className="modal_button">
                            <button
                                className="addButton"
                                type="submit"
                                onClick={handleAnswer}
                            >
                                ?????? ??????
                            </button>
                            <button
                                className="canButton"
                                onClick={() => setOpenMadal(false)}
                            >
                                ??????
                            </button>
                        </div>
                    </Modal>
                </div>
                <img src={image} alt="" />
                <div className="post_answer">
                    {getAnswer.map(({ id, answers }) => (
                        <p
                            key={id}
                            style={{
                                // bottom:"20px",
                                position: "relative",
                                paddingBottom: "5px",
                                
                            
                            }}
                        >
                            {Id === answers.questionId ? (
                                <span>
                                    {answers.answer}
                                    <br />
                                    <span
                                        style={{
                                            // position: "absolute",
                                            color: "#ba2727",
                                            fontSize: "small",
                                            display: "flex",
                                            right: "0px",
                                        
                                        }}
                                    >
                                        {" "}
                                        <span style={{ color: "#b92b27" }}>
                                            {answers.user.displayName
                                                ? answers.user.displayName
                                                : answers.user.email}
                                        </span>
                                        {new Date(
                                            answers.timestamp?.toDate()
                                        ).toLocaleString()}{" "}
                                        ??? ?????????
                                    </span>
                                </span>
                            ) : (
                                " "
                            )}
                        </p>
                    ))}
                </div>
            </div>
            <div className="post_footer">
                <div className="post_footerAction">
                    <ArrowUpwardOutlined />
                    <ArrowDownwardOutlined />
                </div>
                <RepeatOneOutlined />
                <ChatBubbleOutlineOutlined />
                <div className="post_footerRight">
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
        </div>
    );
}

export default Post;

import React from "react";
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

function Post({ key, Id, image, question, timestamp, quoraUser }) {
    return (
        <div className="post">
            <div className="post_info">
                <Avatar src={quoraUser.photo} />
                <h5>
                    {quoraUser.displayName
                        ? quoraUser.displayName
                        : quoraUser.email}
                </h5>
                <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
                {/* 날짜를 표시하는 조건 외우두면 좋다 */}
            </div>
            <div className="post_body">
                <div className="post_question">
                    <p>{question}</p>
                    <button className="post_btnAnswer">답변하기</button>
                </div>
                <div className="post_answer">
                    {/* <p>답변입니다</p> */}
                </div>
                <img src={image} alt=""/>
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

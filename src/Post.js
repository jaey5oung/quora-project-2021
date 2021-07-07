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

function Post() {
    return (
        <div className="post">
            <div className="post_info">
                <Avatar />
                <h5>user id</h5>
                <small>작성 시간</small>
            </div>
            <div className="post_body">
                <div className="post_question">
                    <p>질문내용 입니다</p>
                    <button className="post_btnAnswer">답변하기</button>
                </div>
                <div className="post_answer">
                    <p>답변입니다</p>
                </div>
                <img
                    src="http://ideoti.synology.me:8000/fftfft/contents/1822611403_JOLbIBpx_e9b640c2d4423dcdd0b010509f2a8390783d4539.jpg"
                    alt=""
                ></img>
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

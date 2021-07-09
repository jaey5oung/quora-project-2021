import React from "react";
import "./QuoraBox.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function QuoraBox() {
    const user = useSelector(selectUser);
    return (
        <div className="quoraBox">
            <div className="quoraBox_info">
                <Avatar src={user.photo} />
                <h5>{user.display}</h5>
            </div>
            <div className="quoraBox_quora">
                <p>오른쪽 상단 질문하기를 사용해주시면 감사하겠습니다.</p>
            </div>
        </div>
    );
}

export default QuoraBox;

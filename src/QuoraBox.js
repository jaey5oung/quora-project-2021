import React from "react";
import "./QuoraBox.css";
import { Avatar } from "@material-ui/core";

function QuoraBox() {
    return (
        <div className="quoraBox">
            <div className="quoraBox_info">
                <Avatar />
                <h5>장재영</h5>
            </div>
            <div className="quoraBox_quora">
                <p>무엇이 궁금하신가요?</p>
            </div>
        </div>
    );
}

export default QuoraBox;

import React from "react";
import Quora from "./Quora";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login";

function App() {
    const user = useSelector(selectUser);
    // useSelector란 리덕스의 상태값을 조회하기위한 hook 함수
    // 여기서는 userSlice에서 state=>state.user.user 를 가져오므로
    // 현재 state에 createSlice action에 따른 user의 상태값을 넣어주는 것으로 이해하면 된다.
    return <div className="App">{user ? <Quora /> : <Login />}</div>;
}

export default App;

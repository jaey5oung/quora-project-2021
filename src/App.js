import React, { useEffect } from "react";
import Quora from "./Quora";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
    const user = useSelector(selectUser);
    // useSelector란 리덕스의 상태값을 조회하기위한 hook 함수
    // 여기서는 userSlice에서 state=>state.user.user 를 가져오므로
    // 현재 state에 createSlice action에 따른 user의 상태값을 넣어주는 것으로 이해하면 된다.

    const dispatch = useDispatch();
    //dispatch 앱 전역에 전파를 한다 로그인을
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(
                    login({
                        uid: authUser.uid,
                        photo: authUser.photoURL,
                        display: authUser.displayName,
                        email: authUser.email,
                        //이 payload(탑재)들이 useSlice action.payload로 가진다
                    })
                );
                console.log(authUser);
            } else {
                dispatch(logout());
            }
        });
    }, [dispatch]);
    // useEffect 로그인을 전역에 동기화를 시켜준다
    // auth 로그인상태로 바뀌엇다는걸 디스패치를 통해 알려준다
    // 동기화를 시킬기준은 dispatch 변함에따라 이므로 []안에 넣어준다

    return <div className="App">{user ? <Quora /> : <Login />}</div>;
}

export default App;

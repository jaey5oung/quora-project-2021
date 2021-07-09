import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import questionReducer from "../features/questionSlice";

//configureStore는 createStore를 API화하여 쉽게 사용하는 것 툴킷화 시킨것
export const store = configureStore({
    reducer: {
        user: userReducer,
        question: questionReducer,
    },
});

// Store 란
// state값들을 저장하는 장소
// reducer에서 전달받은 action을 redux의 dispatch함수를 사용하여 store로 전달합니다
// store createStore를 통해서 만들수 있고
// createStore 안에 reducer 역할을 하는 함수가 들어 가야한다.

//store 가서 나 이 리듀서쓸꺼야 -> userSlice 확인후 다시 스토어로 간다음 컨포넌트로 감

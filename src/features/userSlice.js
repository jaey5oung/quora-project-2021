import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    // 1.user 의 초기상태 null
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            //state 기존에 내가 갖고있는 상태
            //로그인을 했을때 action.payload 에 현재 정보들을 넣을것이다.
            //모든 정보들 주소나 이런것들은 payload 에 넣는다
            //결국 현재상태인 state.user 에 action.payload로 넘어온 정보들을 담는것(payload : 집합으로된 정보들)
        },
        logout: (state) => {
            state.user = null;
        },
    },
});
// 2.user 가 login 되어있거나 logout 되어있는 두가지 케이스 이 두개가 리듀서의 액션이고 키값으로 들어온것

export const { login, logout } = userSlice.actions;
// createSlice는 userSlice.actions 과 같이 다닌다 createSlice 안에 reducers 에 정보들을
// export 해준다


export const selectUser = (state) => state.user.user
// user는 위에 명시되어있는 initialState 안에 user이고 user는 우리가 가져온 payload들
// 이것을 밖으로 쏠것이다.


export default userSlice.reducer;

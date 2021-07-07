// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
// 1. yarn add firebase 설치
// 2. firebase import 시키기

const firebaseConfig = {
    apiKey: "AIzaSyAqqciH9-1NYk-HNm9s1zSpdXjYcVa1i6Y",
    authDomain: "quora-clone-e9531.firebaseapp.com",
    projectId: "quora-clone-e9531",
    storageBucket: "quora-clone-e9531.appspot.com",
    messagingSenderId: "406388501209",
    appId: "1:406388501209:web:414ccf13c887a12d2a2cc8",
    measurementId: "G-XBE5H9RNY6",
};

// 3. 프로젝트 설정에 들어가서 firebaseConfig 복사 붙여넣기

const firebaseApp = firebase.initializeApp(firebaseConfig);

// 4. firebaseApp 선언후 initializeApp에 Config 짚어넣기

const auth = firebase.auth();

// 5. 그냥 로그인 Auth

const provider = new firebase.auth.GoogleAuthProvider();

// 6. 구글 로그인 Auth

const db = firebaseApp.firestore();

// 7. firestore DB 설정

export { auth, provider };
//한개의 선언에서 여러개를 다른컴포넌트에서 import 해 올수 있다.

export default db;
//오로지 한개의 모듈만을 가져온다

// ex) export 과일                     import {사과,바나나,딸기} from '과일'
// ex) export default 직선             import 직선 from '직선'

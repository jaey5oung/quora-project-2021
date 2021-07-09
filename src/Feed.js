import React, { useState, useEffect } from "react";
import "./Feed.css";
import db from "./firebase";
import Post from "./Post";
import QuoraBox from "./QuoraBox";
function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("questions")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        question: doc.data(),
                    }))
                )
            );
    }, []);
    //작성시간 순서들 orderBy , 내림차순으로 desc , 순간데이터베이스의 사진을 찍는다 onSnpshop()
    //순간적으로 찍은 db들을 setPosts안에 넣을것이다 dosc.map을 통해 모든자료들을 갖고올것이다

    return (
        <div className="feed">
            <QuoraBox />
            {posts.map(({ id, question }) => (
                <Post
                    key={id}
                    Id={id}
                    image={question.imageUrl}
                    question={question.question}
                    timestamp={question.timestamp}
                    quoraUser={question.user}
                />
            ))}
        </div>
    );
}

export default Feed;

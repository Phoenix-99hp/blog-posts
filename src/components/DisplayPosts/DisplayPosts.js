import React, { useEffect, useState } from 'react';
import Comment from "../Comment";
import Post from "../Post";
import NoPosts from "../NoPosts";
import Spinner from "../Spinner";

const DisplayPosts = () => {
    const [writeComment, setWriteComment] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 1000);
    }, [])

    useEffect(() => {
        fetch("https://nameless-plains-23983.herokuapp.com/api/posts", {
            // fetch("http://localhost:3001/api/posts", {
            method: "GET",
            mode: "cors",
        })
            .then(res => {
                return res.json()
            })
            .then(response => {
                if (response.post[0]) {
                    console.log(response.post[0]);
                    setCurrentPost(response.post[0]);
                }
                else {
                    setTimeout(() => {
                        setSpinner(false);
                    }, 1000)
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        // if (currentPost) {
        setTimeout(() => {
            setSpinner(false);
        }, 1000);
        // }
    }, [currentPost])

    const showPosts = () => {
        return (
            writeComment ? <Comment setCurrentPost={setCurrentPost} currentPost={currentPost} writeComment={writeComment} setWriteComment={setWriteComment} />
                : currentPost ? <Post setCurrentPost={setCurrentPost} currentPost={currentPost} setWriteComment={setWriteComment} writeComment={writeComment} /> : <NoPosts />
        )
    }

    return (
        spinner ? <Spinner /> : showPosts()
    )
}

export default DisplayPosts
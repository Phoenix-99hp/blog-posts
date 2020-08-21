import React, { useState, useEffect } from 'react';
import styles from "./Post.module.css";
import moment from "moment";
import Spinner from "../Spinner";
import ShowComments from "../ShowComments";
import NoPosts from "../NoPosts";

const Post = ({ setCurrentPost, currentPost, setWriteComment, writeComment }) => {

    const [commentsAreActive, setCommentsAreActive] = useState(false);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 1000);
    }, [currentPost])

    const nextPost = () => {
        setSpinner(true);
        setCommentsAreActive(false);
        fetch(`https://nameless-plains-23983.herokuapp.com/api/posts/${currentPost._id}/next`, {
            // fetch(`http://localhost:3001/api/posts/${currentPost._id}/next`, {
            method: "GET",
            mode: "cors"
        })
            .then(res => {
                return res.json()
            })
            .then(response => {
                if (response.post) {
                    setCurrentPost(response.post[0]);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const prevPost = () => {
        setSpinner(true);
        setCommentsAreActive(false);
        fetch(`https://nameless-plains-23983.herokuapp.com/api/posts/${currentPost._id}/prev`, {
            // fetch(`http://localhost:3001/api/posts/${currentPost._id}/prev`, {
            method: "GET",
            mode: "cors"
        })
            .then(res => {
                return res.json()
            })
            .then(response => {
                if (response.post) {
                    setCurrentPost(response.post[0]);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const seeHideComments = (e) => {
        const btn = e.target;
        console.log(e.target.innerText);
        if (e.target.innerText === "See Comments") {
            btn.disabled = true;
            setCommentsAreActive(!commentsAreActive);
            setTimeout(() => {
                btn.disabled = false
            }, 1000)
        }
        else {
            setCommentsAreActive(!commentsAreActive);
        }
    }

    return (
        spinner ?
            <Spinner />
            : currentPost ?
                <div id={styles.mainContainer}>
                    <div className={styles.postContainer}>
                        <p className={`${styles.postInfo} ${styles.postTitle}`}>{currentPost.title}</p>
                        <p className={`${styles.postBody} ${styles.postInfo}`}> {currentPost.text}</p>
                        <p className={styles.postInfo}>Posted: {moment(currentPost.timestamp).format('L')}</p>
                        <button className={styles.prevBtn} onClick={() => prevPost()}>Previous</button>
                        <button className={styles.nextBtn} onClick={() => nextPost()}>Next</button>
                        <button className={styles.commentBtn} onClick={() => setWriteComment(!writeComment)}>Add Comment</button>
                    </div>
                    <button className={styles.showCommentsBtn} onClick={(e) => seeHideComments(e)}>{commentsAreActive ? "Hide Comments" : "See Comments"}</button>
                    <ShowComments currentPost={currentPost} commentsAreActive={commentsAreActive} />
                </div>
                :
                <NoPosts />
    )
}

export default Post

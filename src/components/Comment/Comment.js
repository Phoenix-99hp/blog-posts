import React, { useState, useEffect } from 'react';
import moment from "moment";
import styles from "./Comment.module.css";
import Spinner from "../Spinner";

const Comment = ({ currentPost, writeComment, setWriteComment, setCurrentPost }) => {

    const [spinner, setSpinner] = useState(true);
    const specificError = [];

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 1000);
    }, [])

    const validate = ({ newComment, name }) => {
        const adjComment = newComment.trim();
        const adjName = name.trim();
        if ((/^[a-z0-9\s@\.\-,]+$/i.test(adjName) === false) || (adjName === " ")
            || (adjName.length === 0)) {
            specificError.push("/error/characters");
            return false;
        }
        else if ((adjComment.length > 200) || (adjComment === " ")) {
            specificError.push("/error/comment");
            return false;
        }
        else {
            return true;
        }
    }

    const submitComment = (e) => {
        e.preventDefault();
        const data = {
            post: currentPost._id,
            newComment: e.target.parentElement.previousElementSibling.value,
            name: e.target.parentElement.previousElementSibling.previousElementSibling.children[0].value
        }
        if (validate(data)) {
            fetch("https://nameless-plains-23983.herokuapp.com/api/posts", {
                // fetch("http://localhost:3001/api/posts", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)

            })
                .then(res => {
                    return res.json();
                })
                .then(response => {
                    if (response.updated) {
                        setCurrentPost(response.updated);
                        window.location.href = "/";
                    }
                    else if (response.specific) {
                        window.location.href = response.specific;
                    }
                    else {
                        window.location.href = "/error";
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
        else {
            window.location.href = specificError[0];
        }
    }

    return (
        spinner ?
            <Spinner />
            :
            <div id={styles.mainContainer}>
                <div className={styles.postContainer}>
                    <p className={`${styles.postInfo} ${styles.postTitle}`}>{currentPost.title}</p>
                    <p className={`${styles.postBody} ${styles.postInfo}`}>{currentPost.text}</p>
                    <p className={styles.postInfo}>Posted: {moment(currentPost.timestamp).format('L')}</p>
                </div>
                <div id={styles.inputContainer}>
                    <input id={styles.commentUser} placeholder={"Your Name..."} />
                </div>
                <textarea id={styles.commentArea} placeholder={"Your Comment..."} />
                <div className={styles.submitCancelContainer}>
                    <button id={styles.submitCommentBtn} onClick={(e) => { submitComment(e); setWriteComment(!writeComment); }}>Submit Comment</button>
                    <button id={styles.cancelBtn} onClick={() => setWriteComment(!writeComment)}>Cancel</button>
                </div>
            </div>
    )
}

export default Comment
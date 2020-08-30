import React, { useState, useEffect } from "react";
import styles from "./ShowComments.module.css";
import Spinner from "../Spinner";
import moment from "moment";

const ShowComments = ({ currentPost, commentsAreActive }) => {
	const [commentSpinner, setCommentSpinner] = useState(false);
	const [active, setActive] = useState(false);

	useEffect(() => {
		if (commentsAreActive) {
			setCommentSpinner(true);
			setTimeout(() => {
				setCommentSpinner(false);
			}, 1000);
		}
	}, [commentsAreActive]);

	useEffect(() => {
		if (commentsAreActive) {
			setActive(true);
		} else {
			setActive(false);
		}
	}, [commentsAreActive]);

	return commentSpinner ? (
		<Spinner />
	) : currentPost.comments[0] ? (
		currentPost.comments.map((comment, index) => {
			return (
				<div
					id={styles.commentContainer}
					data-id={comment._id}
					className={`${styles.commentContainer} ${
						!active ? styles.commentsInactive : styles.commentsActive
					}`}
					key={index}
				>
					<p className={`${styles.commentInfo} ${styles.commentBody}`}>
						{comment.text}
					</p>
					<p className={`${styles.commentInfo} ${styles.paddingLast}`}>
						<span id={styles.commentName}>{comment.name}</span> -{" "}
						{moment(comment.timestamp).format("L")}
					</p>
				</div>
			);
		})
	) : (
		<div id={active ? styles.noCommentActive : styles.noCommentInactive}>
			<p>There are no comments for this post.</p>
		</div>
	);
};

export default ShowComments;

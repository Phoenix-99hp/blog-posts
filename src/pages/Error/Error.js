import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout";
import styles from "./Error.module.css";
import { Link, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";

const Error = () => {
    const [spinner, setSpinner] = useState(true);
    const { specific } = useParams();

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 1000);
    }, [])

    return (
        <Layout>
            {spinner ?
                <Spinner />
                :
                <div id={styles.errorContainer}>
                    <p id={styles.errorBody}><span id={styles.error}>Error: </span>{specific === "comment" ? "Comments must be 200 characters or less, and may not be empty." :
                        specific === "characters" ? "The Name field must not be blank, and only the characters a-z 0-9 @ . - are allowed as part of the Name field." :
                            "Something went wrong."}
                    </p>
                    <Link className={styles.link} to="/blog-posts/">Back</Link>
                </div>}
        </Layout>
    )
}

export default Error

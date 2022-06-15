import styles from './CommentsList.module.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CommentItem from '../CommentItem/CommentItem';
import { useState } from 'react';

function CommentsList() {
  const comments = useSelector((state) => state.comments.comments);

  return (!comments.length
    ? <div style={{
      display: "flex",
      justifyContent: "start",
      fontSize: 20,
      color: "black",
      marginBottom: 80,
    }}>Отзывов пока нет</div>
    : <div className={styles["comments"]}>
      {
        comments.map((comment, index) => (
          <div key={comment.id}>
            <CommentItem
             commentId={comment.id}
              comment={comment}
              cssClass={index % 2 === 0 ? `${styles["comment"]} ${styles["light-comment"]}` : `${styles["comment"]} ${styles["dark-comment"]}`}
            />
          </div>
        ))
      }
    </div >
  );
}

export default CommentsList;
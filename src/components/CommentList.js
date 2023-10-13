import React, { useEffect, useState } from 'react';
import user_icon from '../assests/icon.png';
import '../index.css'
import { useAuth } from './AuthContext';
const CommentList = ({ comments, onDelete }) => {
    const { user } = useAuth();
    const [role, setRole] = useState('')
    const [userId, setUserId] = useState('')
    useEffect(() => {
        if (user) {
            setRole(user.roles)
            setUserId(user.id)
        }
    }, [user]);
    return (
        <div className="comment-list">
            <h3>Comments</h3>
            {comments.map((comment) => (
                <div key={comment.id} className="comment">
                    <div className="comment-content">
                        <img src={user_icon} alt="" className="user-image" />
                        <div className="user-details">
                            <p>
                                <strong>{comment.name}</strong>
                            </p>
                            <p className='comment-list-email'>{comment.email}</p>
                            <p className="comment-text">{comment.text}</p>
                            {(role === 'admin' || userId === comment.userId)  && (
                                <button onClick={() => onDelete(comment.id)}>Delete</button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentList;


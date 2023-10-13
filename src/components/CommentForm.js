import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
const CommentForm = ({ blogId, addComment }) => {
    const { user } = useAuth()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [userId, setUserId] = useState('')

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setUserId(user.id)
        }
    }, [user])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
            blogId,
            userId,
            name,
            email,
            text,

        };

        addComment(newComment);
        setName('');
        setEmail('');
        setText('');

    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='comment-form'>
                <div>
                    <textarea value={text} placeholder="Leave a comment" onChange={(e) => setText(e.target.value)} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CommentForm;

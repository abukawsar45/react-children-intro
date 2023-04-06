import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const { title, id, body } = post;
    
    return (
        <div className='post'>
            <h1>Singara post</h1>
            <br />
            <h2>{title}</h2>
            <h1>Id: --{id} </h1>
            <Link to={`/post/${id}`}>Details</Link>
            <Link to={`/post/${id}`}><button>More </button></Link>
        </div>
    );
};

export default Post;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const postDetail = useLoaderData();
    // console.log(postDetail)
    const { title, id, body } = postDetail;

    return (
        <div>
            <h1>Post Detail</h1>
            <h4>{title}</h4>
            <p>{body} </p>
        </div>
    );
};

export default PostDetail;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';


const Posts = () => {
    const posts = useLoaderData();
    console.log(posts)
    return (
        <div>
            <h1>All posts are here & tottorise : {posts.length} </h1>
            {
                posts.map(post =><Post
                    key = { post.id }
                    post={post}/>
                )
            }
        </div>
    );
};

export default Posts;
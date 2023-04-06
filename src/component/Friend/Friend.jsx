import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    // console.log(friend);
    const {name,email,id, phone,} = friend
    return (
        <div className='single-cart'>
            <h4>{name} </h4>
            <p>Email: {email}</p>
            <p>phone</p>
            <p ><Link className='button' to={`/friend/${id}`}>More</Link></p>
        </div>
    );
};

export default Friend;
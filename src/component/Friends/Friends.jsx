import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css'
const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends);
    return (
        <div>
            
            <h4>friends factory {friends.length} </h4>
            <div className='cart-container'>
                {
                    friends.map((friend) => <Friend
                        key={friend.id}
                    friend={friend}
                    />)
                }
            </div>
        </div>
    );
};

export default Friends;
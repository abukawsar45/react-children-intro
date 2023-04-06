import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend);
    const {name, phone, website, email, company, address} = friend;
    return (
        <div>
            <h1>Everything about this person is here</h1>
            <h3>{name} </h3>
            <h5>Contact: {phone} </h5>
            <p>Email: {email}</p>
            {/* <p>{company}</p> */}
        </div>
    );
};

export default FriendDetail;
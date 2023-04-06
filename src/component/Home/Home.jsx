import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const navigation = useNavigation();
    console.log(navigation)

    return (
        <div>
            <Header/>
            <div>{navigation.state === 'loading' && 'loading.....1234'}</div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
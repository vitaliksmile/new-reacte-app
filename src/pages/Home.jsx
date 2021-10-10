import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';


const Home = (props) => {
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('is_logged_in');
        if (!isLoggedIn) {
            props.history.push('/login');
        }
    }, []);

    return (<h1>Home page</h1>);
}

export default withRouter(Home);

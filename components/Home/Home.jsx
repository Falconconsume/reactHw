import React from 'react';
import Header from '../Header.jsx';
import '../../src/App.css';
import Languages from "../Home/Languages.jsx";

const Home = () => {
    return (
        <div className="homeBorder">
            <Header/>
            <Languages/>
        </div>
    );
};

export default Home;

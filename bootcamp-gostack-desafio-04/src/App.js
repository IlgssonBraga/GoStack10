import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Postlist from './components/PostList';


function App(){
    return(
        <>
        <Header/>
        <Postlist/>
        </>
    )
}

export default App;
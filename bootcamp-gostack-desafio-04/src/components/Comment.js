import React from 'react';
import '../styles/Comment.css';

function Comment(props){
    return (
        <>
        <div id="responsebody">
        <div id="authorresponseimg"> <img src={props.info.author.avatar} /></div>
        <div id="contentresponse">
            <div id="textresponse">
                <p>
                <b><a href="#">{props.info.author.name}</a> </b>
                {props.info.content}
                </p>
            </div>
            
            
        </div>
        
        </div>
        <div id="like"><a className="curtir" href="#">Curtir · </a> <a className="res" href="#">Responder ∙ </a> 
        <a className="time" href="#">{props.info.date}</a></div>


        </>
    )
}

export default Comment;
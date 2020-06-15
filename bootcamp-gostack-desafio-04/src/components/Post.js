import React from 'react';
import '../styles/Post.css';
import Comment from './Comment';

function Post(props){
    return (
        <>
        
        <div id="post">
            <div id="postheader">
    <div id="authorimg" > <a href="#"><img src={props.data.author.avatar}
    title={props.data.author.name}/></a> </div>
                <div id="authorinfo">
    <div id="authorname"><a href="#">{props.data.author.name}</a></div>
                    <div id="postdate"><a href="#">{props.data.date}</a></div>
                </div>
           
            </div>

            <div id="postbody"><p>{props.data.content}</p>
            </div>
            {props.data.comments.map(comment => <Comment key={comment.id} info={comment}/>)}
            
        </div>
        </>
    )
}

export default Post;
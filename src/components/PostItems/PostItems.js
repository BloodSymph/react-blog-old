import React from 'react';
import './PostItems.css';
import NavButtons from "../../ui/NavButtons/NavButtons";

const PostItems = (props) => {
    return (
        <div className='post'>
            <div className="post-body">
                <div className="post-content">
                    <h3 className="post-title">
                        {props.number}. {props.posts.title}
                    </h3>
                    <p className="post-description">
                        {props.posts.body}
                    </p>
                </div>
                <div className="post-btn">
                    <NavButtons>Read More</NavButtons>
                </div>
            </div>
        </div>
    );
};

export default PostItems;
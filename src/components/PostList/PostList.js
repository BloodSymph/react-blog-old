import React from 'react';
import './PostList.css';
import PostItems from "../PostItems/PostItems";
import {textAnimation} from "../../helpers/animation/animationBlog";
import {motion} from "framer-motion";

const PostList = ({posts}) => {
    if (!posts.length) {
        return (
            <h2 className="posts-error">Publications not founded!</h2>
        );
    }
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className='post-list'
        >
            {posts.map((post, index) =>
                <motion.div
                    variants={textAnimation}
                    custom={1}
                    className="post-column"
                >
                    <PostItems
                        number={index + 1}
                        posts={post}
                    />
                </motion.div>
            )}
        </motion.div>
    );
};

export default PostList;
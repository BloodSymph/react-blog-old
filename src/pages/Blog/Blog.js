import React, {useEffect, useState} from 'react';
import {useScroll} from "../../hooks/useScroll";
import './Blog.css';
import PostList from "../../components/PostList/PostList";
import Input from "../../ui/Input/Input";
import SearchButton from "../../ui/SearchButton/SearchButton";
import PostService from "../../api/PostService";
import {useFetching} from "../../hooks/useFetching";
import Loader from "../../ui/Loader/Loader";
import {useSearch} from "../../hooks/useSearch";
import {motion} from "framer-motion";
import {textAnimation} from "../../helpers/animation/animationBlog";

const Blog = () => {

    const [posts, setPosts] = useState([]);
    const [isVisible, setVisibility] = useState(false);
    const [elementRef, setScroll] = useScroll();
    const [searchedPosts, setQuery] = useSearch(posts);

    const [fetchPosts, isLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll();
        setPosts([...posts])
    });


    useEffect(() => {
        fetchPosts();
    }, []);

    useEffect(() => {
        return () => {
            setScroll();
        };
    }, [elementRef, setScroll]);

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className="blog"
            ref={elementRef}
            onClick={() => setVisibility(false)}
        >
            <div className="blog-body">
                <div className="blog-text">
                    <motion.h2
                        variants={textAnimation}
                        className="blog-title"
                    >
                        All Blog Posts
                    </motion.h2>
                    <motion.p
                        variants={textAnimation}
                        custom={2}
                        className="blog-description"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquid animi beatae facilis fuga incidunt itaque iusto nemo nesciunt obcaecati.
                    </motion.p>
                </div>

                <div className="blog-input" onClick={e => e.stopPropagation()}>
                    {isVisible ?
                        <Input
                            type="text"
                            placeholder="Search by..."
                            onChange={e => setQuery(e.target.value)}
                        />
                        :
                        <SearchButton onClick={() => setVisibility(true)}>Search</SearchButton>
                    }
                </div>
                {postError &&
                    <motion.div
                        variants={textAnimation}
                        className="error"
                    >
                        Error: {postError}
                    </motion.div>
                }
                {isLoading
                    ?
                    <Loader/>
                    :
                    <PostList posts={searchedPosts}/>
                }
            </div>
        </motion.section>
    );
};

export default Blog;
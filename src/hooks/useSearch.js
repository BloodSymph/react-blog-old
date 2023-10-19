import {useMemo, useState} from "react";

export const useSearch = (posts) => {
  const [query, setQuery] = useState('');
    const searchedPosts = useMemo(() => {
        return posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    }, [posts, query])
    return [searchedPosts, setQuery]
}
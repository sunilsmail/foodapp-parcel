import { useEffect, useState } from "react"
import fetchUserPosts from "./user-post.service";

const useFetchUserPosts = () => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        getUserByPost();
    }, []);
    async function getUserByPost() {
        const data = await fetchUserPosts();
        setPosts(formatUserPosts(data));

    }

    return posts;
}

function formatUserPosts(data) {
    const posts = data[0]?.posts;
    const users = data[1]?.users;
    const userPosts = posts.map(
        (post) => {
            return { ...post, user: users?.filter((item) => item.id === post.userId)[0] }
        }
    );
    return (userPosts);
}

export default useFetchUserPosts;

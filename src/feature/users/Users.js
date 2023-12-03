import useFetchUserPosts from "./services/useFetchUserPosts";
import User from "./User";

const Users = () => {
    const posts = useFetchUserPosts();
    if (!posts) return null;
    // console.log(posts)
    return (
        <div>
            {
                posts.map((post) => {
                    return (<User key={post.id} post={post} />)
                })
            }
        </div>
    );
}

export default Users;
const User = ({ post }) => {
    // console.log(post)
    const { body, tags, user, title } = post;
    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
            <div className=" w-full lg:max-w-full lg:flex">
                <div className="border border-gray-400 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <p className="text-sm text-gray-600 flex items-center">
                            <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                            </svg>
                            Members only
                        </p>
                        <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-700 text-base">{body}</p>
                        <p className="text-gray-700 text-base">{tags}</p>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full mr-4" src={user?.image} alt="Avatar of Writer" />
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none">{user?.firstName} {user?.lastName}</p>
                            <p className="text-gray-600">{user?.birthDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;
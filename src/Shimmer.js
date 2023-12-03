const Shimmer = () => {
    return (
        <div className="container">
            {
                Array(14).fill('').map((ele, key) => {
                    return (
                        <div className="card" key={key}>
                            <img className="img" src="https://www.kalypsofarms.com/wp-content/uploads/2019/08/dummy.png" />
                            <section className="content">
                                <p>Hot Biryani !</p>
                            </section>
                        </div>
                    )
                })
            }

        </div>
    );
}

export default Shimmer;